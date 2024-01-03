import { CommentUpdateManyWithoutProfilesInput } from "./CommentUpdateManyWithoutProfilesInput";
import { ListingUpdateManyWithoutProfilesInput } from "./ListingUpdateManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  avatarUrl?: string | null;
  bio?: string | null;
  comments?: CommentUpdateManyWithoutProfilesInput;
  listings?: ListingUpdateManyWithoutProfilesInput;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
