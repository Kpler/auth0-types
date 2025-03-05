export type CacheWriteResult =
  | { type: "success" }
  | { type: "error"; code: string };

export type Dictionary = Record<string, unknown>;

export type EventAuthenticationMethodName =
  | "federated"
  | "pwd"
  | "passkey"
  | "sms"
  | "email"
  | "phone_number"
  | "mock"
  | "mfa"
  // the "& Record<never, never>" is used only for enhanced autocompletion
  | (string & Record<never, never>);

export type EventBaseAuthenticationMethod = {
  name: EventAuthenticationMethodName;
  timestamp: string;
};

export type EventAuthorization = {
  roles: string[];
};

export type EventConnection = {
  id: string;
  metadata?: Dictionary;
  name: string;
  strategy: string;
};

export type EventBaseRequest = {
  geoip: RequestGeoIP;
  hostname?: string;
  ip: string;
  language?: string;
  method: string;
  user_agent?: string;
};

type RequestGeoIP = {
  cityName?: string;
  continentCode?: string;
  countryCode?: string;
  countryCode3?: string;
  countryName?: string;
  latitude?: number;
  longitude?: number;
  subdivisionCode?: string;
  subdivisionName?: string;
  timeZone?: string;
};

export type EventClient = {
  client_id: string;
  metadata: Dictionary;
  name: string;
};

export type EventOrganization = {
  display_name: string;
  id: string;
  metadata: Dictionary;
  name: string;
};

export type EventResourceServer = {
  identifier: string;
};

export type EventSecrets = Record<string, string>;

export type EventStats = {
  logins_count: number;
};

export type EventTenant = {
  id: string;
};

export type EventBaseTransaction<AdditionalProtocols extends string = never> = {
  acr_values: string[];
  locale: string;
  login_hint?: string;
  prompt?: string[];
  protocol?:
    | (
        | "oidc-basic-profile"
        | "oidc-implicit-profile"
        | "samlp"
        | "wsfed"
        | "wstrust-usernamemixed"
        | "oauth2-device-code"
        | "oauth2-resource-owner"
        | "oauth2-resource-owner-jwt-bearer"
        | "oauth2-password"
        | "oauth2-webauthn"
        | "oauth2-access-token"
        | "oauth2-refresh-token"
        | "oauth2-token-exchange"
      )
    | AdditionalProtocols;
  redirect_uri?: string;
  requested_scopes: string[];
  response_mode?: "query" | "fragment" | "form_post" | "web_message";
  response_type?: Array<"code" | "token" | "id_token">;
  state?: string;
  ui_locales: string[];
};

export type EventUserBaseIdentity = {
  connection?: string;
  isSocial?: boolean;
  profileData?: Dictionary;
  provider?: string;
  user_id?: string;
};

export type EventUser<
  EventUserIdentity extends EventUserBaseIdentity = EventUserBaseIdentity,
> = {
  app_metadata: Dictionary;
  created_at: string;
  email?: string;
  email_verified: boolean;
  enrolledFactors?: Array<{ options?: Dictionary; type: string }>;
  family_name?: string;
  given_name?: string;
  identities: EventUserIdentity[];
  last_password_reset?: string;
  multifactor?: string[];
  name?: string;
  phone_number?: string;
  phone_verified?: boolean;
  user_id: string;
  username?: string;
  nickname?: string;
  picture?: string;
  updated_at: string;
  user_metadata: Dictionary;
};

export type ApiAccessDeny<R = void> = (reason: string) => R;

export type ApiMfaFactor<
  PushType extends "push-simple" | "push-options" = "push-simple",
> =
  | {
      type:
        | "otp"
        | "recovery-code"
        | "email"
        | "webauthn-platform"
        | "webauthn-roaming";
    }
  | (PushType extends "push-simple"
      ? {
          type: "push-notification";
        }
      : {
          type: "push-notification";
          options: {
            otpFallback: boolean;
          };
        })
  | {
      type: "phone";
      options: {
        preferredMethod: "voice" | "sms" | "both";
      };
    };

export type ApiAuthenticationChallenge = {
  challengeWith: (
    factor: ApiMfaFactor<"push-options">,
    options?: { additionalFactors?: Array<ApiMfaFactor<"push-options">> },
  ) => void;
  challengeWithAny: (factors: Array<ApiMfaFactor<"push-options">>) => void;
};

export type ApiCache = {
  delete: (key: string) => CacheWriteResult;
  get: (key: string) => { value: string; expires_at: number } | void;
  set: (
    key: string,
    value: string,
    options?: { expires_at?: number; ttl?: number },
  ) => CacheWriteResult;
};

export type ApiRedirect<R = void> = {
  encodeToken: (options: {
    expiresInSeconds?: number;
    payload: Record<string, unknown>;
    secret: string;
  }) => string;
  sendUserTo: (url: string, options?: { query?: Record<string, string> }) => R;
  validateToken: (options: {
    secret: string;
    tokenParameterName?: string;
  }) => Record<string, unknown>;
};

export type ApiSetCustomClaim<R = void> = (name: string, value: unknown) => R;

export type ApiUser<R = void> = {
  setAppMetadata: (name: string, value: unknown) => R;
  setUserMetadata: (name: string, value: unknown) => R;
};
