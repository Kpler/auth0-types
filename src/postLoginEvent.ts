// https://auth0.com/docs/customize/actions/explore-triggers/signup-and-login-triggers/login-trigger/post-login-event-object
// https://auth0.com/docs/customize/actions/explore-triggers/signup-and-login-triggers/login-trigger

import type {
  Dictionary,
  EventAuthorization,
  EventBaseAuthenticationMethod,
  EventBaseRequest,
  EventBaseTransaction,
  EventClient,
  EventConnection,
  EventOrganization,
  EventResourceServer,
  EventSecrets,
  EventStats,
  EventTenant,
  EventUser,
} from "./shared";

type RiskAssessmentConfidence = "low" | "medium" | "high" | "neutral";

type RiskAssessment = {
  assessments: {
    ImpossibleTravel?: {
      code:
        | "minimal_travel_from_last_login"
        | "travel_from_last_login"
        | "substantial_travel_from_last_login"
        | "impossible_travel_from_last_login"
        | "invalid_travel"
        | "missing_geoip"
        | "anonymous_proxy"
        | "unknown_location"
        | "initial_login"
        | "location_history_not_found"
        | "assessment_not_available";
      confidence: RiskAssessmentConfidence;
    };
    NewDevice?: {
      code:
        | "match"
        | "partial_match"
        | "no_match"
        | "initial_login"
        | "unknown_device"
        | "no_device_history"
        | "assessment_not_available";
      confidence: RiskAssessmentConfidence;
      details?: {
        device?: "known" | "unknown";
        useragent?: "known" | "unknown";
      };
    };
    UntrustedIP?: {
      code:
        | "not_found_on_deny_list"
        | "found_on_deny_list"
        | "invalid_ip_address"
        | "assessment_not_available";
      confidence: RiskAssessmentConfidence;
      details?: {
        category?: string;
        ip?: string;
        matches?: string;
        source?: string;
      };
    };
  };
  confidence: RiskAssessmentConfidence;
  version: string;
};

type Prompt = {
  fields?: Dictionary;
  id: string;
  vars?: Dictionary;
};

type RefreshToken = {
  client_id?: string;
  created_at: string;
  device?: {
    initial_asn?: string;
    initial_ip?: string;
    initial_user_agent?: string;
    last_asn?: string;
    last_ip?: string;
    last_user_agent?: string;
  };
  expires_at?: string;
  id: string;
  idle_expires_at?: string;
  last_exchanged_at?: string;
  resource_servers?: Array<{
    audience: string;
    scopes: string;
  }>;
  rotating?: boolean;
  session_id?: string;
  user_id?: string;
};

type Request = EventBaseRequest & {
  asn?: string;
  body: Dictionary;
  query: Dictionary;
};

type Session = {
  authenticated_at?: string;
  clients?: Array<{
    client_id: string;
  }>;
  created_at?: string;
  device?: {
    initial_asn?: string;
    initial_ip?: string;
    initial_user_agent?: string;
    last_asn?: string;
    last_ip?: string;
    last_user_agent?: string;
  };
  expires_at?: string;
  id: string;
  idle_expires_at?: string;
  last_interacted_at?: string;
  updated_at?: string;
  user_id?: string;
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
  | "multifactor"
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

export type PostLoginUser = User;

export type PostLoginEvent = {
  authentication?: {
    methods: EventBaseAuthenticationMethod[];
    riskAssessment?: RiskAssessment;
  };
  authorization?: EventAuthorization;
  client: EventClient;
  connection: EventConnection;
  organization?: EventOrganization;
  prompt?: Prompt;
  refresh_token?: RefreshToken;
  request: Request;
  resource_server?: EventResourceServer;
  secrets: EventSecrets;
  session?: Session;
  stats: EventStats;
  tenant: EventTenant;
  transaction?: EventBaseTransaction<"oidc-ciba" | "oidc-hybrid-profile"> & {
    linking_id?: string;
    requested_authorization_details?: Array<{
      type: string;
    }>;
  };
  user: User;
};
