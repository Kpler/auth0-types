// https://auth0.com/docs/customize/actions/explore-triggers/signup-and-login-triggers/pre-user-registration-trigger/pre-user-registration-event-object

import type {
  Dictionary,
  EventBaseRequest,
  EventBaseTransaction,
  EventClient,
  EventConnection,
  EventTenant,
  EventUser,
} from "./shared";

type User = Partial<
  Pick<
    EventUser,
    | "app_metadata"
    | "email"
    | "family_name"
    | "given_name"
    | "name"
    | "nickname"
    | "phone_number"
    | "picture"
    | "user_metadata"
    | "username"
  >
>;

export type PreUserRegistrationEvent = {
  client?: EventClient;
  connection: EventConnection;
  request: EventBaseRequest & {
    body: Dictionary;
  };
  tenant: EventTenant;
  transaction?: EventBaseTransaction;
  user: User;
};
