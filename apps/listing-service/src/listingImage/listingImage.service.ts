import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ListingImageServiceBase } from "./base/listingImage.service.base";

@Injectable()
export class ListingImageService extends ListingImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
