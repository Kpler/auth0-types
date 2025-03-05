// https://auth0.com/docs/customize/actions/explore-triggers/signup-and-login-triggers/pre-user-registration-trigger/pre-user-registration-api-object

import type { ApiCache, ApiUser } from "./shared";

export type PreUserRegistrationApi = {
  access: {
    deny: (reason: string, userMessage: string) => PreUserRegistrationApi;
  };
  cache: ApiCache;
  user: ApiUser<PreUserRegistrationApi>;
  validation: {
    error: (errorCode: string, errorMessage: string) => void;
  };
};
