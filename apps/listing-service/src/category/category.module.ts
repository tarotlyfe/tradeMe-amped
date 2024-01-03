import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CategoryModuleBase } from "./base/category.module.base";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { CategoryGrpcController } from "./category.grpc.controller";
import { CategoryResolver } from "./category.resolver";

@Module({
  imports: [CategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [CategoryController, CategoryGrpcController],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}
