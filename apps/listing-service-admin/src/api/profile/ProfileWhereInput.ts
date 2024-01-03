import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  comments?: CommentListRelationFilter;
  id?: StringFilter;
  listings?: ListingListRelationFilter;
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
