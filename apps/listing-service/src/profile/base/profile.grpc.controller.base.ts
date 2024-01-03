/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { ProfileService } from "../profile.service";
import { Public } from "../../decorators/public.decorator";
import { ProfileCreateInput } from "./ProfileCreateInput";
import { ProfileWhereInput } from "./ProfileWhereInput";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileUpdateInput } from "./ProfileUpdateInput";
import { Profile } from "./Profile";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { ListingFindManyArgs } from "../../listing/base/ListingFindManyArgs";
import { Listing } from "../../listing/base/Listing";
import { ListingWhereUniqueInput } from "../../listing/base/ListingWhereUniqueInput";

export class ProfileGrpcControllerBase {
  constructor(protected readonly service: ProfileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Profile })
  @GrpcMethod("ProfileService", "create")
  async create(@common.Body() data: ProfileCreateInput): Promise<Profile> {
    return await this.service.create({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        avatarUrl: true,
        bio: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Profile] })
  @ApiNestedQuery(ProfileFindManyArgs)
  @GrpcMethod("ProfileService", "findMany")
  async findMany(@common.Req() request: Request): Promise<Profile[]> {
    const args = plainToClass(ProfileFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        avatarUrl: true,
        bio: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProfileService", "findOne")
  async findOne(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        avatarUrl: true,
        bio: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProfileService", "update")
  async update(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() data: ProfileUpdateInput
  ): Promise<Profile | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          avatarUrl: true,
          bio: true,
          createdAt: true,
          id: true,
          location: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProfileService", "delete")
  async delete(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          avatarUrl: true,
          bio: true,
          createdAt: true,
          id: true,
          location: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  @GrpcMethod("ProfileService", "findManyComments")
  async findManyComments(
    @common.Req() request: Request,
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  @GrpcMethod("ProfileService", "connectComments")
  async connectComments(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  @GrpcMethod("ProfileService", "updateComments")
  async updateComments(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  @GrpcMethod("ProfileService", "disconnectComments")
  async disconnectComments(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @Public()
  @common.Get("/:id/listings")
  @ApiNestedQuery(ListingFindManyArgs)
  @GrpcMethod("ProfileService", "findManyListings")
  async findManyListings(
    @common.Req() request: Request,
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Listing[]> {
    const query = plainToClass(ListingFindManyArgs, request.query);
    const results = await this.service.findListings(params.id, {
      ...query,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        coverImage: true,
        createdAt: true,
        description: true,
        id: true,

        owner: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/listings")
  @GrpcMethod("ProfileService", "connectListings")
  async connectListings(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/listings")
  @GrpcMethod("ProfileService", "updateListings")
  async updateListings(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/listings")
  @GrpcMethod("ProfileService", "disconnectListings")
  async disconnectListings(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listings: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
