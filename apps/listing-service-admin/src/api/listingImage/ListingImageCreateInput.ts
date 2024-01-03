import { ListingCreateNestedManyWithoutListingImagesInput } from "./ListingCreateNestedManyWithoutListingImagesInput";

export type ListingImageCreateInput = {
  altText?: string | null;
  listing?: ListingCreateNestedManyWithoutListingImagesInput;
  order?: number | null;
  url: string;
};
