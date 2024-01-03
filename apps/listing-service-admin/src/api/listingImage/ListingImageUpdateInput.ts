import { ListingUpdateManyWithoutListingImagesInput } from "./ListingUpdateManyWithoutListingImagesInput";

export type ListingImageUpdateInput = {
  altText?: string | null;
  listing?: ListingUpdateManyWithoutListingImagesInput;
  order?: number | null;
  url?: string;
};
