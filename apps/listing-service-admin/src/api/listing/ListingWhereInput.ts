import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingImageListRelationFilter } from "../listingImage/ListingImageListRelationFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type ListingWhereInput = {
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  listingImages?: ListingImageListRelationFilter;
  owner?: ProfileWhereUniqueInput;
  title?: StringFilter;
};
