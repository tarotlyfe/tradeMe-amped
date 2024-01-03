import { ListingUpdateManyWithoutCategoriesInput } from "./ListingUpdateManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type CategoryUpdateInput = {
  description?: string | null;
  imageUrl?: string | null;
  listings?: ListingUpdateManyWithoutCategoriesInput;
  name?: string;
  parentCategory?: CategoryWhereUniqueInput | null;
  subCategories?: CategoryWhereUniqueInput | null;
};
