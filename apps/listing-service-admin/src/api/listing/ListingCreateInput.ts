import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutListingsInput } from "./CommentCreateNestedManyWithoutListingsInput";
import { ListingImageCreateNestedManyWithoutListingsInput } from "./ListingImageCreateNestedManyWithoutListingsInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type ListingCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutListingsInput;
  coverImage?: string | null;
  description?: string | null;
  listingImages?: ListingImageCreateNestedManyWithoutListingsInput;
  owner: ProfileWhereUniqueInput;
  title: string;
};
