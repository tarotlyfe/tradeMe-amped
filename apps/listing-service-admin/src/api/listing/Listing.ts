import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { ListingImage } from "../listingImage/ListingImage";
import { Profile } from "../profile/Profile";

export type Listing = {
  category?: Category | null;
  comments?: Array<Comment>;
  coverImage: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  listingImages?: Array<ListingImage>;
  owner?: Profile;
  title: string;
  updatedAt: Date;
};
