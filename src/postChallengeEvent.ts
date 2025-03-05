// https://auth0.com/docs/customize/actions/explore-triggers/password-reset-triggers/post-challenge-trigger/post-challenge-event-object

import type {
  Dictionary,
  EventAuthorization,
  EventBaseAuthenticationMethod,
  EventBaseRequest,
  EventBaseTransaction,
  EventClient,
  EventConnection,
  EventOrganization,
  EventStats,
  EventTenant,
  EventUser,
} from "./shared";

type ApiMfaFactorType =
  | "otp"
  | "recovery-code"
  | "email"
  | "webauthn-platform"
  | "webauthn-roaming"
  | "push-notification"
  | "phone";

type AuthenticationMethod = EventBaseAuthenticationMethod & {
  // only set for "mfa"
  type?: ApiMfaFactorType;
};

type Request = EventBaseRequest & {
  body: Dictionary;
  query: Dictionary;
};

type User = Pick<
  EventUser,
  | "app_metadata"
  | "created_at"
  | "email"
  | "email_verified"
  | "enrolledFactors"
  | "family_name"
  | "given_name"
  | "identities"
  | "last_password_reset"
  | "name"
  | "phone_number"
  | "phone_verified"
  | "user_id"
  | "username"
  | "nickname"
  | "picture"
  | "updated_at"
  | "user_metadata"
>;

export type PostChallengeEvent = {
  authentication: {
    methods: AuthenticationMethod[];
  };
  authorization: EventAuthorization;
  client: EventClient;
  connection: EventConnection;
  organization?: EventOrganization;
  request: Request;
  stats: EventStats;
  tenant: EventTenant;
  transaction: Pick<
    EventBaseTransaction,
    "locale" | "login_hint" | "state" | "ui_locales"
  >;
  user: User;
};
