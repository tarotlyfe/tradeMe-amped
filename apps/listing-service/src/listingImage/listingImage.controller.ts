import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ListingImageService } from "./listingImage.service";
import { ListingImageControllerBase } from "./base/listingImage.controller.base";

@swagger.ApiTags("listingImages")
@common.Controller("listingImages")
export class ListingImageController extends ListingImageControllerBase {
  constructor(
    protected readonly service: ListingImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
