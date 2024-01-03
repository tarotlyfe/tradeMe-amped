import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  ProfileId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
