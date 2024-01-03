import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoryService } from "./category.service";
import { CategoryGrpcControllerBase } from "./base/category.grpc.controller.base";

@swagger.ApiTags("categories")
@common.Controller("categories")
export class CategoryGrpcController extends CategoryGrpcControllerBase {
  constructor(protected readonly service: CategoryService) {
    super(service);
  }
}
