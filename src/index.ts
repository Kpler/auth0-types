import type { CredentialsExchangeApi } from "./credentialsExchangeApi";
import type { CredentialsExchangeEvent } from "./credentialsExchangeEvent";
import type { PostChallengeApi } from "./postChallengeApi";
import type {
  PostChallengeEvent,
  PostChallengeUser,
} from "./postChallengeEvent";
import type { PostChangePasswordApi } from "./postChangePasswordApi";
import type {
  PostChangePasswordEvent,
  PostChangePasswordUser,
} from "./postChangePasswordEvent";
import type { PostLoginApi } from "./postLoginApi";
import type { PostLoginEvent, PostLoginUser } from "./postLoginEvent";
import type { PostUserRegistrationApi } from "./postUserRegistrationApi";
import type {
  PostUserRegistrationEvent,
  PostRegistrationUser,
} from "./postUserRegistrationEvent";
import type { PreUserRegistrationApi } from "./preUserRegistrationApi";
import type {
  PreUserRegistrationEvent,
  PreRegistrationUser,
} from "./preUserRegistrationEvent";
import type { SendPhoneMessageApi } from "./sendPhoneMessageApi";
import type {
  SendPhoneMessageEvent,
  SendPhoneMessageUser,
} from "./sendPhoneMessageEvent";
import type { CacheWriteResult } from "./shared";

type Event =
  | CredentialsExchangeEvent
  | PostChallengeEvent
  | PostChangePasswordEvent
  | PostLoginEvent
  | PostUserRegistrationEvent
  | PreUserRegistrationEvent
  | SendPhoneMessageEvent;

type Api =
  | CredentialsExchangeApi
  | PostChallengeApi
  | PostChangePasswordApi
  | PostLoginApi
  | PostUserRegistrationApi
  | PreUserRegistrationApi
  | SendPhoneMessageApi;

export type {
  Event,
  Api,
  CredentialsExchangeApi,
  CredentialsExchangeEvent,
  PostChallengeApi,
  PostChallengeEvent,
  PostChallengeUser,
  PostChangePasswordApi,
  PostChangePasswordEvent,
  PostChangePasswordUser,
  PostLoginApi,
  PostLoginEvent,
  PostLoginUser,
  PostUserRegistrationApi,
  PostUserRegistrationEvent,
  PostRegistrationUser,
  PreUserRegistrationApi,
  PreUserRegistrationEvent,
  PreRegistrationUser,
  SendPhoneMessageApi,
  SendPhoneMessageEvent,
  SendPhoneMessageUser,
  CacheWriteResult,
};
