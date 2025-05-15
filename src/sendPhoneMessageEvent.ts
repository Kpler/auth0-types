// https://auth0.com/docs/customize/actions/explore-triggers/mfa-notifications-trigger/send-phone-message-event-object

import type {
  Dictionary,
  EventBaseRequest,
  EventClient,
  EventTenant,
  EventUser,
  EventUserBaseIdentity,
} from "./shared";

type UserIdentity = EventUserBaseIdentity & {
  last_password_reset?: string;
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

type User = Pick<
  EventUser,
  "created_at" | "email" | "email_verified" | "family_name" | "given_name"
> &
  Partial<Pick<EventUser<UserIdentity>, "app_metadata" | "identities">>;

export type SendPhoneMessageUser = User;

export type SendPhoneMessageEvent = {
  client: EventClient;
  message_options: {
    action: "enrollment" | "second-factor-authentication";
    code: string;
    message_type: "sms" | "voice";
    recipient: string;
    text: string;
  };
  request: EventBaseRequest;
  tenant: EventTenant;
  user: User;
};
