import { Profile } from "../profile/Profile";
import { Listing } from "../listing/Listing";

export type Comment = {
  author?: Profile | null;
  createdAt: Date;
  id: string;
  listing?: Listing;
  text: string;
  updatedAt: Date;
};
