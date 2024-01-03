import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profiles?: ProfileWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
