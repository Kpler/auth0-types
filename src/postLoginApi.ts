// https://auth0.com/docs/customize/actions/explore-triggers/signup-and-login-triggers/login-trigger/post-login-api-object

import type {
  ApiAccessDeny,
  ApiAuthenticationChallenge,
  ApiCache,
  ApiMfaFactor,
  ApiRedirect,
  ApiSetCustomClaim,
  ApiUser,
} from "./shared";

type SamlValue = string | number | boolean | null | SamlValue[];

export type PostLoginApi = {
  access: {
    deny: ApiAccessDeny<PostLoginApi>;
  };
  accessToken: {
    setCustomClaim: ApiSetCustomClaim<PostLoginApi>;
    addScope: (scope: string) => PostLoginApi;
    removeScope: (scope: string) => PostLoginApi;
  };
  authentication: ApiAuthenticationChallenge & {
    /** Only available from within the onContinuePostLogin function */
    recordMethod: (providerUrl: string) => PostLoginApi;
    enrollWith: (
      factor: ApiMfaFactor,
      options?: { additionalFactors?: ApiMfaFactor[] },
    ) => void;
    enrollWithAny: (factors: ApiMfaFactor[]) => void;
    setPrimaryUser: (primaryUserId: string) => void;
  };
  cache: ApiCache;
  idToken: {
    setCustomClaim: ApiSetCustomClaim<PostLoginApi>;
  };
  multifactor: {
    enable: (
      provider: "any" | "duo" | "google-authenticator" | "guardian" | "none",
      options?: {
        allowRememberBrowser?: boolean;
        providerOptions?: {
          host: string;
          ikey: string;
          skey: string;
          username?: string;
        };
      },
    ) => PostLoginApi;
  };
  user: ApiUser<PostLoginApi>;
  redirect: ApiRedirect<PostLoginApi>;
  rules: {
    wasExecuted: (ruleId: string) => boolean;
  };
  samlResponse: {
    setAttribute: (attribute: string, value: SamlValue) => void;
    setAudience: (audience: string) => void;
    setIssuer: (issuer: string) => void;
    setEncryptionPublicKey: (publicKey: string) => void;
    setRecipient: (recipient: string) => void;
    setCreateUpnClaim: (createUpnClaim: boolean) => void;
    setPassthroughClaimsWithNoMapping: (
      passthroughClaimsWithNoMapping: boolean,
    ) => void;
    setMapUnknownClaimsAsIs: (mapUnknownClaimsAsIs: boolean) => void;
    setMapIdentities: (mapIdentities: boolean) => void;
    setDestination: (destination: string) => void;
    setRelayState: (relayState: string) => void;
    setLifetimeInSeconds: (lifetimeInSeconds: number) => void;
    setSignResponse: (signResponse: boolean) => void;
    setNameIdentifierFormat: (nameIdentifierFormat: string) => void;
    setNameIdentifierProbes: (nameIdentifierProbes: string[]) => void;
    setAuthnContextClassRef: (authnContextClassRef: string) => void;
    setSigningCert: (signingCert?: string) => void;
    setIncludeAttributeNameFormat: (
      includeAttributeNameFormat: boolean,
    ) => void;
    setTypedAttributes: (typedAttributes: boolean) => void;
    setEncryptionCert: (encryptionCert?: string) => void;
    setCert: (cert?: string) => void;
    setKey: (key?: string) => void;
    /** @deprecated */
    setSignatureAlgorithm: (
      signatureAlgorithm: "rsa-sha256" | "rsa-sha1",
    ) => void;
    /** @deprecated */
    setDigestAlgorithm: (digestAlgorithm: "sha256" | "sha1") => void;
  };
  session: {
    revoke: (
      reason: string,
      options?: { preserveRefreshTokens?: boolean },
    ) => PostLoginApi;
    setExpiresAt: (absolute: number) => PostLoginApi;
    setIdleExpiresAt: (idle: number) => PostLoginApi;
  };
  refreshToken: {
    revoke: (reason: string) => PostLoginApi;
    setExpiresAt: (absolute: number) => PostLoginApi;
    setIdleExpiresAt: (idle: number) => PostLoginApi;
  };
};
