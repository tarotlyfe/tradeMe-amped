import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ListingModuleBase } from "./base/listing.module.base";
import { ListingService } from "./listing.service";
import { ListingController } from "./listing.controller";
import { ListingGrpcController } from "./listing.grpc.controller";
import { ListingResolver } from "./listing.resolver";

@Module({
  imports: [ListingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ListingController, ListingGrpcController],
  providers: [ListingService, ListingResolver],
  exports: [ListingService],
})
export class ListingModule {}
