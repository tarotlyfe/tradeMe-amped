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
import { ListingService } from "../listing.service";
import { Public } from "../../decorators/public.decorator";
import { ListingCreateInput } from "./ListingCreateInput";
import { ListingWhereInput } from "./ListingWhereInput";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingUpdateInput } from "./ListingUpdateInput";
import { Listing } from "./Listing";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { ListingImageFindManyArgs } from "../../listingImage/base/ListingImageFindManyArgs";
import { ListingImage } from "../../listingImage/base/ListingImage";
import { ListingImageWhereUniqueInput } from "../../listingImage/base/ListingImageWhereUniqueInput";

export class ListingGrpcControllerBase {
  constructor(protected readonly service: ListingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Listing })
  @GrpcMethod("ListingService", "create")
  async create(@common.Body() data: ListingCreateInput): Promise<Listing> {
    return await this.service.create({
      data: {
        ...data,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,

        owner: {
          connect: data.owner,
        },
      },
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
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Listing] })
  @ApiNestedQuery(ListingFindManyArgs)
  @GrpcMethod("ListingService", "findMany")
  async findMany(@common.Req() request: Request): Promise<Listing[]> {
    const args = plainToClass(ListingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ListingService", "findOne")
  async findOne(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ListingService", "update")
  async update(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() data: ListingUpdateInput
  ): Promise<Listing | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,

          owner: {
            connect: data.owner,
          },
        },
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
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ListingService", "delete")
  async delete(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @GrpcMethod("ListingService", "findManyComments")
  async findManyComments(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
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
  @GrpcMethod("ListingService", "connectComments")
  async connectComments(
    @common.Param() params: ListingWhereUniqueInput,
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
  @GrpcMethod("ListingService", "updateComments")
  async updateComments(
    @common.Param() params: ListingWhereUniqueInput,
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
  @GrpcMethod("ListingService", "disconnectComments")
  async disconnectComments(
    @common.Param() params: ListingWhereUniqueInput,
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
  @common.Get("/:id/listingImages")
  @ApiNestedQuery(ListingImageFindManyArgs)
  @GrpcMethod("ListingService", "findManyListingImages")
  async findManyListingImages(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<ListingImage[]> {
    const query = plainToClass(ListingImageFindManyArgs, request.query);
    const results = await this.service.findListingImages(params.id, {
      ...query,
      select: {
        altText: true,
        createdAt: true,
        id: true,
        order: true,
        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/listingImages")
  @GrpcMethod("ListingService", "connectListingImages")
  async connectListingImages(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: ListingImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingImages: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/listingImages")
  @GrpcMethod("ListingService", "updateListingImages")
  async updateListingImages(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: ListingImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingImages: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/listingImages")
  @GrpcMethod("ListingService", "disconnectListingImages")
  async disconnectListingImages(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: ListingImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingImages: {
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
