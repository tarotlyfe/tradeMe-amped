import { Listing } from "../listing/Listing";

export type ListingImage = {
  altText: string | null;
  createdAt: Date;
  id: string;
  listing?: Array<Listing>;
  order: number | null;
  updatedAt: Date;
  url: string;
};
