import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ListingImageModuleBase } from "./base/listingImage.module.base";
import { ListingImageService } from "./listingImage.service";
import { ListingImageController } from "./listingImage.controller";
import { ListingImageGrpcController } from "./listingImage.grpc.controller";
import { ListingImageResolver } from "./listingImage.resolver";

@Module({
  imports: [ListingImageModuleBase, forwardRef(() => AuthModule)],
  controllers: [ListingImageController, ListingImageGrpcController],
  providers: [ListingImageService, ListingImageResolver],
  exports: [ListingImageService],
})
export class ListingImageModule {}
