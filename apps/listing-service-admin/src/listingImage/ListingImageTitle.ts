import { ListingImage as TListingImage } from "../api/listingImage/ListingImage";

export const LISTINGIMAGE_TITLE_FIELD = "altText";

export const ListingImageTitle = (record: TListingImage): string => {
  return record.altText?.toString() || String(record.id);
};
