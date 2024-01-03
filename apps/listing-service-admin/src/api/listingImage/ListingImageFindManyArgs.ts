import { ListingImageWhereInput } from "./ListingImageWhereInput";
import { ListingImageOrderByInput } from "./ListingImageOrderByInput";

export type ListingImageFindManyArgs = {
  where?: ListingImageWhereInput;
  orderBy?: Array<ListingImageOrderByInput>;
  skip?: number;
  take?: number;
};
