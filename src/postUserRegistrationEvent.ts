// https://auth0.com/docs/customize/actions/explore-triggers/signup-and-login-triggers/post-user-registration-trigger/post-user-registration-event-object

import type {
  EventBaseRequest,
  EventBaseTransaction,
  EventConnection,
  EventTenant,
  EventUser,
} from "./shared";

type User = Pick<
  EventUser,
  | "app_metadata"
  | "created_at"
  | "email"
  | "email_verified"
  | "family_name"
  | "given_name"
  | "last_password_reset"
  | "name"
  | "nickname"
  | "phone_number"
  | "phone_verified"
  | "picture"
  | "updated_at"
  | "user_id"
  | "user_metadata"
  | "username"
>;

export type PostUserRegistrationEvent = {
  connection: EventConnection;
  request?: EventBaseRequest;
  tenant: EventTenant;
  transaction?: EventBaseTransaction;
  user: User;
};
