import type { CredentialsExchangeApi } from "./credentialsExchangeApi";
import type { CredentialsExchangeEvent } from "./credentialsExchangeEvent";
import type { PostChallengeApi } from "./postChallengeApi";
import type { PostChallengeEvent } from "./postChallengeEvent";
import type { PostChallengeUser } from "./postChallengeEvent";
import type { PostChangePasswordApi } from "./postChangePasswordApi";
import type { PostChangePasswordEvent } from "./postChangePasswordEvent";
import type { PostChangePasswordUser } from "./postChangePasswordEvent";
import type { PostLoginApi } from "./postLoginApi";
import type { PostLoginEvent } from "./postLoginEvent";
import type { PostLoginUser } from "./postLoginEvent";
import type { PostUserRegistrationApi } from "./postUserRegistrationApi";
import type { PostUserRegistrationEvent } from "./postUserRegistrationEvent";
import type { PostRegistrationUser } from "./postUserRegistrationEvent";
import type { PreUserRegistrationApi } from "./preUserRegistrationApi";
import type { PreUserRegistrationEvent } from "./preUserRegistrationEvent";
import type { PreRegistrationUser } from "./preUserRegistrationEvent";
import type { SendPhoneMessageApi } from "./sendPhoneMessageApi";
import type { SendPhoneMessageEvent } from "./sendPhoneMessageEvent";
import type { SendPhoneMessageUser } from "./sendPhoneMessageEvent";
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
