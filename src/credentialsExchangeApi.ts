// https://auth0.com/docs/customize/actions/explore-triggers/machine-to-machine-trigger/credentials-exchange-api-object

import type { ApiCache, ApiSetCustomClaim } from "./shared";

export type CredentialsExchangeApi = {
  access: {
    deny: (
      code: "invalid_scope" | "invalid_request" | "server_error",
      reason: string,
    ) => CredentialsExchangeApi;
  };
  accessToken: {
    setCustomClaim: ApiSetCustomClaim<CredentialsExchangeApi>;
  };
  cache: ApiCache;
};
