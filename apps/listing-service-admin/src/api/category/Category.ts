import { Listing } from "../listing/Listing";

export type Category = {
  description: string | null;
  id: string;
  imageUrl: string | null;
  listings?: Array<Listing>;
  name: string;
  parentCategory?: Category | null;
  subCategories?: Category | null;
};
