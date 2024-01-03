import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type CommentWhereInput = {
  author?: ProfileWhereUniqueInput;
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  text?: StringFilter;
};
