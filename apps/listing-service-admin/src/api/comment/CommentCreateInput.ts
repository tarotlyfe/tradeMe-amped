import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type CommentCreateInput = {
  author?: ProfileWhereUniqueInput | null;
  listing: ListingWhereUniqueInput;
  text: string;
};
