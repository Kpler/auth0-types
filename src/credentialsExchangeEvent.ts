// https://auth0.com/docs/customize/actions/explore-triggers/machine-to-machine-trigger/credentials-exchange-event-object

import type {
  Dictionary,
  EventBaseRequest,
  EventClient,
  EventOrganization,
  EventResourceServer,
  EventSecrets,
  EventTenant,
} from "./shared";

type CredentialsExchangeTransaction = {
  requested_scopes: string[];
};

export type CredentialsExchangeEvent = {
  accessToken: {
    customClaims: Dictionary;
    scope: string[];
  };
  client: EventClient;
  organization: EventOrganization;
  request: EventBaseRequest & {
    body: Dictionary;
  };
  resource_server: EventResourceServer;
  secrets: EventSecrets;
  tenant: EventTenant;
  transaction: CredentialsExchangeTransaction;
};
