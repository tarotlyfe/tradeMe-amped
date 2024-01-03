import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ListingService } from "./listing.service";
import { ListingGrpcControllerBase } from "./base/listing.grpc.controller.base";

@swagger.ApiTags("listings")
@common.Controller("listings")
export class ListingGrpcController extends ListingGrpcControllerBase {
  constructor(protected readonly service: ListingService) {
    super(service);
  }
}
