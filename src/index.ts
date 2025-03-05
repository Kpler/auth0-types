import type { CredentialsExchangeApi } from "./credentialsExchangeApi";
import type { CredentialsExchangeEvent } from "./credentialsExchangeEvent";
import type { PostChallengeApi } from "./postChallengeApi";
import type { PostChallengeEvent } from "./postChallengeEvent";
import type { PostChangePasswordApi } from "./postChangePasswordApi";
import type { PostChangePasswordEvent } from "./postChangePasswordEvent";
import type { PostLoginApi } from "./postLoginApi";
import type { PostLoginEvent } from "./postLoginEvent";
import type { PostUserRegistrationApi } from "./postUserRegistrationApi";
import type { PostUserRegistrationEvent } from "./postUserRegistrationEvent";
import type { PreUserRegistrationApi } from "./preUserRegistrationApi";
import type { PreUserRegistrationEvent } from "./preUserRegistrationEvent";
import type { SendPhoneMessageApi } from "./sendPhoneMessageApi";
import type { SendPhoneMessageEvent } from "./sendPhoneMessageEvent";
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
  PostChangePasswordApi,
  PostChangePasswordEvent,
  PostLoginApi,
  PostLoginEvent,
  PostUserRegistrationApi,
  PostUserRegistrationEvent,
  PreUserRegistrationApi,
  PreUserRegistrationEvent,
  SendPhoneMessageApi,
  SendPhoneMessageEvent,
  CacheWriteResult,
};
