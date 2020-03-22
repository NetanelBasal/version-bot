Version bot is here to complete the version management experience by hooking into [standard-version](https://github.com/conventional-changelog/standard-version) library and posting an readable, customizable changelog summary message right into your Slack channel!

<hr />

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![coc-badge](https://img.shields.io/badge/codeof-conduct-ff69b4.svg?style=flat-square)]()
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e5079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 🌩 Installation

Install `version-bot` by running:

```
npm i @skazaz/version-bot
yarn @skazaz/version-bot
```

Initialize the version bot's configuration by running:

```
version-bot init
```

This command does the following:
* Adds version bot scripts to you `package.json` ("version-bot:build-message", "version-bot:post-message")
* Provide your slack bot [incoming webhooks link](https://api.slack.com/messaging/webhooks)
* Updates/creates your standard-version configuration with the version bot config.

The last thing we need to do is run the `post-message` command after we publish our package:
```
// package.json
{
    ...
    "scripts": {
        ...
        "publish": "npm publish && npm run version-bot:post-message"
    }
}
```

Now your slack bot will start posting the version changes 🎉.

##  Commands

These are the 3 available commands: 

* `init` - 🌱 Initializes the version-bot configuration.
* `build-message` - 🏗 Builds the changelog message for the slack bot, automatically runs as part of the [standard-version lifecycle scripts](https://github.com/conventional-changelog/standard-version#lifecycle-scripts) (if you ran the `init` command).
* `post-message` - 📬 Sends the message to your slack bot.

## 🕹 Options

- `package`: The path to your `package.json` file: (defaults to `process.cwd()`)

```
version-bot build-message --package src/my/path
version-bot build-message -p src/my/path
```

## 🎨 Customizations

You can customize the bot's message header and footer via the version bot config (which is located with your `standard-version` config).

What's customizable:
```ts
  headerMessages?: string[] - An array of possible headers for the bot to choose randonly from. 
  footerMessage?: string - The bot's closing message. 
```

In case none of these properties were provided we will use the [default config](https://github.com/shaharkazaz/version-bot/blob/master/src/defaultConfig.ts).

#### Accessing environment parameters 

You can combine some environment params into your strings! by using `{{paramName}}` syntax, for example:

```
Version {{version}} has just landed 🚀:
```

Will resolve in:
```
Version 1.0.0 has just landed 🚀:
```

Currently supported params:

- `version` - The current version of the release (after the bump).
- `compareChangesLink` - The code comparison link between the versions, for example: "https://github.com/shaharkazaz/version-bot/compare/v1.0.0...v2.0.0".


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/shaharkazaz"><img src="https://avatars2.githubusercontent.com/u/17194830?v=4" width="100px;" alt=""/><br /><sub><b>Shahar Kazaz</b></sub></a><br /><a href="https://github.com/Shahar Kazaz/version bot/commits?author=shaharkazaz" title="Code">💻</a> <a href="#content-shaharkazaz" title="Content">🖋</a> <a href="https://github.com/Shahar Kazaz/version bot/commits?author=shaharkazaz" title="Documentation">📖</a> <a href="#example-shaharkazaz" title="Examples">💡</a> <a href="#ideas-shaharkazaz" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-shaharkazaz" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
