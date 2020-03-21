import { Config } from './types';

// TODO add more headers and update the footer
export const defaultConfig: Config = {
  headerMessages: [
      'Fresh out of the oven! *{{version}}* was just released 👨🏻‍🍳:'
  ],
  footerMessage: '{{version}}'
};
