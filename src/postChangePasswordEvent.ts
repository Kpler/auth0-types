// https://auth0.com/docs/customize/actions/explore-triggers/password-reset-triggers/post-change-password-trigger/post-change-password-event-object
// https://auth0.com/docs/customize/actions/explore-triggers/password-reset-triggers/post-change-password-trigger

import type {
  EventBaseRequest,
  EventUser,
  EventConnection,
  EventSecrets,
} from "./shared";

type User = Partial<
  Pick<
    EventUser,
    | "email"
    | "email_verified"
    | "last_password_reset"
    | "phone_number"
    | "phone_verified"
    | "user_id"
    | "username"
  >
>;

export type PostChangePasswordEvent = {
  connection: EventConnection;
  request: EventBaseRequest;
  secrets: EventSecrets;
  user: User;
};
