import { boot } from 'quasar/wrappers';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { ReCaptchaInstance } from 'recaptcha-v3';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $recaptcha: (action: string) => Promise<string>;
    $recaptchaLoaded: () => Promise<boolean>;
    $recaptchaInstance: ReCaptchaInstance;
  }
}

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.use(VueReCaptcha, {
    siteKey: '6Lc7o1ocAAAAAKUxmRgGoPfNZwkSFMD2WDQk5AwZ',
    useRecaptchaNet: true,
  });
});
