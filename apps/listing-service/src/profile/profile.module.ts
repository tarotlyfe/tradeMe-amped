import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProfileModuleBase } from "./base/profile.module.base";
import { ProfileService } from "./profile.service";
import { ProfileController } from "./profile.controller";
import { ProfileGrpcController } from "./profile.grpc.controller";
import { ProfileResolver } from "./profile.resolver";

@Module({
  imports: [ProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProfileController, ProfileGrpcController],
  providers: [ProfileService, ProfileResolver],
  exports: [ProfileService],
})
export class ProfileModule {}
