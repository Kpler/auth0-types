# auth0-types

This package provides types for [Auth0 Action Triggers](https://auth0.com/docs/customize/actions/explore-triggers).

It is not endorsed by, maintained by, or affiliated with Auth0 in any way.

Brought to you by [Kpler - Intelligence tools for trade](https://www.kpler.com/).

## Installation

```sh
npm install -D @kpler/auth0-types
```

## Available types

* `credentials-exchange`
  * [CredentialsExchangeEvent](./src/credentialsExchangeEvent.ts)
  * [CredentialsExchangeApi](./src/credentialsExchangeApi.ts)
* `post-challenge`
  * [PostChallengeEvent](./src/postChallengeEvent.ts)
  * [PostChallengeApi](./src/postChallengeApi.ts)
* `post-change-password`
  * [PostChangePasswordEvent](./src/postChangePasswordEvent.ts)
  * [PostChangePasswordApi](./src/postChangePasswordApi.ts)
* `post-login`
  * [PostLoginEvent](./src/postLoginEvent.ts)
  * [PostLoginApi](./src/postLoginApi.ts)
* `post-user-registration`
  * [PostUserRegistrationEvent](./src/postUserRegistrationEvent.ts)
  * [PostUserRegistrationApi](./src/postUserRegistrationApi.ts)
* `pre-user-registration`
  * [PreUserRegistrationEvent](./src/preUserRegistrationEvent.ts)
  * [PreUserRegistrationApi](./src/preUserRegistrationApi.ts)
* `send-phone-message`
  * [SendPhoneMessageEvent](./src/sendPhoneMessageEvent.ts)
  * [SendPhoneMessageApi](./src/sendPhoneMessageApi.ts)

## Usage (example)

```ts
import type { PostLoginApi, PostLoginEvent } from "@kpler/auth0-types";

export const onExecutePostLogin = async (
  event: PostLoginEvent,
  api: PostLoginApi,
) => {
  // "event" and "api" now have proper types!
};
```

## Contributing

Contributions are welcome! Please adhere to the coding standards used and [open a PR](https://github.com/Kpler/auth0-types/compare).

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for your commit messages and make sure your code passes the ESLint ruleset (`npm run lint`).

If you plan for larger changes, please [create an issue](https://github.com/Kpler/auth0-types/issues/new) first.

## License

[MIT](./LICENSE)
