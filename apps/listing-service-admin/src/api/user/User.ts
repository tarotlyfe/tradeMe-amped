import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profiles?: Profile | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
