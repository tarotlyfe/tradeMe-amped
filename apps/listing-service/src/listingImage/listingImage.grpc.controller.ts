import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ListingImageService } from "./listingImage.service";
import { ListingImageGrpcControllerBase } from "./base/listingImage.grpc.controller.base";

@swagger.ApiTags("listingImages")
@common.Controller("listingImages")
export class ListingImageGrpcController extends ListingImageGrpcControllerBase {
  constructor(protected readonly service: ListingImageService) {
    super(service);
  }
}
