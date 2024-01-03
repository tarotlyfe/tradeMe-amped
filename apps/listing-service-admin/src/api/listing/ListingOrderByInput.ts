import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  categoryId?: SortOrder;
  coverImage?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
