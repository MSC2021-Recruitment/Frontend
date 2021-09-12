<template>
  <q-page class="column items-center">
    <div class="col" style="max-width: 400px; width: 100%">
      <div class="q-pa-md" style="width: 100%">
        <div class="row flex flex-center">
          <q-img src="icons/icon.svg" style="width: 100px; height: 100px" />
          <div class="text-h4 text-center q-mt-lg">西电微软学生俱乐部</div>
          <div class="text-h6 text-grey text-center">
            Microsoft Student Club in XDU
          </div>
        </div>
        <br />
        <br />
        <br />
        <q-input
          ref="account_ref"
          square
          outlined
          v-model="account"
          label="注册邮箱或手机号"
          :rules="[(val) => !!val || '请填写邮箱地址或手机号']"
        />
        <q-input
          ref="password_ref"
          square
          outlined
          type="password"
          v-model="password"
          label="请输入密码"
          :rules="[(val) => !!val || '请填写密码']"
        />
        <div style="color: #404040">
          This site is protected by reCAPTCHA and the Google
          <a style="color: #404040" href="https://policies.google.com/privacy"
            >Privacy Policy</a
          >
          and
          <a style="color: #404040" href="https://policies.google.com/terms"
            >Terms of Service</a
          >
          apply.
        </div>
        <br />
        <div class="row flex flex-center">
          <q-btn
            unelevated
            class="q-ma-md"
            color="primary"
            @click="login"
            label="登录"
          />
          <q-btn
            unelevated
            class="q-ma-md"
            color="green"
            @click="
              (val) => {
                this.$router.push({ path: '/register' });
              }
            "
            label="报名注册"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosResponse } from 'axios';
import { CommonResponse } from 'src/boot/axios';
import { QInput, useQuasar } from 'quasar';

export default defineComponent({
  name: 'Login',
  components: {},
  methods: {
    login() {
      this.$q.notify({
        spinner: true,
        message: '登录中，请稍候...',
        timeout: 10000,
      });
      void this.$recaptchaLoaded().then(() => {
        void this.$recaptcha('login').then((token: string) => {
          // console.log(token);
          void this.$api
            .post('/api/account/login', {
              token: token,
              account: this.account,
              password: this.password,
            })
            .then((val: AxiosResponse<CommonResponse>) => {
              if (val.data.code != 0) {
                this.$q.notify({
                  color: 'negative',
                  message: '登录失败: ' + val.data.msg,
                });
                this.account = '';
                this.password = '';
              } else {
                this.$q.notify({
                  color: 'positive',
                  message: '登录成功',
                });
                location.reload();
              }
            });
        });
      });
    },
  },
  setup() {
    const $q = useQuasar();
    const account = ref('');
    const password = ref('');
    const robot = ref(false);
    return {
      $q,
      account_ref: ref<QInput>(),
      password_ref: ref<QInput>(),
      account,
      password,
      robot,
    };
  },
  mounted() {
    if (localStorage.getItem('login') === 'true')
      void this.$router.push({ path: '/index' });
  },
});
</script>
