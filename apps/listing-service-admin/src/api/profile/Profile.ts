import { Comment } from "../comment/Comment";
import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Profile = {
  avatarUrl: string | null;
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  id: string;
  listings?: Array<Listing>;
  location: string | null;
  updatedAt: Date;
  user?: User | null;
};
