import { ListingCreateNestedManyWithoutCategoriesInput } from "./ListingCreateNestedManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type CategoryCreateInput = {
  description?: string | null;
  imageUrl?: string | null;
  listings?: ListingCreateNestedManyWithoutCategoriesInput;
  name: string;
  parentCategory?: CategoryWhereUniqueInput | null;
  subCategories?: CategoryWhereUniqueInput | null;
};
