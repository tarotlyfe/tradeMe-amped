import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user", "profile", "category", "listing", "listingimage", "comment"],
    protoPath: [
      "src/user/user.proto",
      "src/profile/profile.proto",
      "src/category/category.proto",
      "src/listing/listing.proto",
      "src/listingimage/listingimage.proto",
      "src/comment/comment.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
