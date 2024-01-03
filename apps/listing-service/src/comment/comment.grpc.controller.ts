import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentService } from "./comment.service";
import { CommentGrpcControllerBase } from "./base/comment.grpc.controller.base";

@swagger.ApiTags("comments")
@common.Controller("comments")
export class CommentGrpcController extends CommentGrpcControllerBase {
  constructor(protected readonly service: CommentService) {
    super(service);
  }
}
