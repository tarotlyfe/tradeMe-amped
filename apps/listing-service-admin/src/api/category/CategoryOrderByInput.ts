import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  ParentId?: SortOrder;
  subCategoriesId?: SortOrder;
};
