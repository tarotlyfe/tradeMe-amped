import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";

export type ListingImageWhereInput = {
  altText?: StringNullableFilter;
  id?: StringFilter;
  listing?: ListingListRelationFilter;
  url?: StringFilter;
};
