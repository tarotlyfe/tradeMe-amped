import { CommentCreateNestedManyWithoutProfilesInput } from "./CommentCreateNestedManyWithoutProfilesInput";
import { ListingCreateNestedManyWithoutProfilesInput } from "./ListingCreateNestedManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  avatarUrl?: string | null;
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutProfilesInput;
  listings?: ListingCreateNestedManyWithoutProfilesInput;
  location?: string | null;
  user: UserWhereUniqueInput | null;
};
