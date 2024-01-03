import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutListingsInput } from "./CommentUpdateManyWithoutListingsInput";
import { ListingImageUpdateManyWithoutListingsInput } from "./ListingImageUpdateManyWithoutListingsInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type ListingUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutListingsInput;
  coverImage?: string | null;
  description?: string | null;
  listingImages?: ListingImageUpdateManyWithoutListingsInput;
  owner?: ProfileWhereUniqueInput;
  title?: string;
};
