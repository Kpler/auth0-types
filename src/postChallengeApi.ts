// https://auth0.com/docs/customize/actions/explore-triggers/password-reset-triggers/post-challenge-trigger/post-challenge-api-object

import type {
  ApiAccessDeny,
  ApiAuthenticationChallenge,
  ApiCache,
  ApiRedirect,
} from "./shared";

export type PostChallengeApi = {
  access: {
    deny: ApiAccessDeny<PostChallengeApi>;
  };
  authentication: ApiAuthenticationChallenge;
  cache: ApiCache;
  redirect: ApiRedirect<PostChallengeApi>;
  transaction: {
    setResultUrl: (
      url: string,
      options?: { query: Record<string, unknown> },
    ) => void;
  };
};
