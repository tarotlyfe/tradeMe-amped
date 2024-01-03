import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "avatarUrl";

export const ProfileTitle = (record: TProfile): string => {
  return record.avatarUrl?.toString() || String(record.id);
};
