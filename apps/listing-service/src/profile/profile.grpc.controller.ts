import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfileService } from "./profile.service";
import { ProfileGrpcControllerBase } from "./base/profile.grpc.controller.base";

@swagger.ApiTags("profiles")
@common.Controller("profiles")
export class ProfileGrpcController extends ProfileGrpcControllerBase {
  constructor(protected readonly service: ProfileService) {
    super(service);
  }
}
