import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type CategoryWhereInput = {
  id?: StringFilter;
  listings?: ListingListRelationFilter;
  name?: StringFilter;
  parentCategory?: CategoryWhereUniqueInput;
  subCategories?: CategoryWhereUniqueInput;
};
