<template>
  <q-page class="column items-center">
    <div class="col" style="max-width: 1000px; width: 100%">
      <div class="q-pa-md" style="width: 100%">
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="primary"
          animated
          :vertical="$q.screen.lt.md"
          flat
        >
          <q-step
            :name="1"
            title="我们开始吧"
            icon="send"
            :done="done_account"
            :error="err_account"
          >
            <div class="text-h5">你好呀，打算修改你的报名信息吗？</div>
            <br />
            <div class="text-h6">你叫什么名字？</div>
            <br />
            <q-input
              ref="name_ref"
              square
              outlined
              v-model="name"
              label="姓名"
              :rules="[(val) => !!val || '请填写你的姓名']"
            />
            <div class="text-h6">你的邮箱是？（用作用户名）</div>
            <br />
            <q-input
              ref="email_ref"
              square
              outlined
              v-model="email"
              label="邮箱"
              :rules="[(val) => !!val || '请填写邮箱地址', isEmailValid]"
            />
            <div class="text-h6">你的手机号是？（发送面试通知）</div>
            <div class="text">我们不会泄露你的个人信息。</div>
            <br />
            <q-input
              ref="tel_ref"
              square
              outlined
              v-model="tel"
              mask="###########"
              label="手机号"
              :rules="[(val) => !!val || '请填写手机号', isTelValid]"
            />
            <q-stepper-navigation>
              <q-btn
                unelevated
                @click="validateAccountInfo"
                color="primary"
                label="整完了，下一步！"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="个人信息"
            icon="person"
            :error="err_info"
            :done="done_info"
          >
            <div class="text-h6">你的入学年度？（2019，2020，2021）</div>
            <br />
            <q-input
              ref="level_ref"
              square
              outlined
              v-model="level"
              mask="####"
              label="入学年度"
              :rules="[(val) => !!val || '请填写入学年度', isLevelValid]"
            />
            <div class="text-h6">你的学号是？</div>
            <br />
            <q-input
              ref="stu_id_ref"
              square
              outlined
              mask="###########"
              v-model="stu_id"
              label="学号"
              :rules="[(val) => !!val || '请正确填写学号', isStuIdValid]"
            />
            <div class="text-h6">你是什么专业呢？</div>
            <br />
            <q-input
              ref="major_ref"
              square
              outlined
              v-model="major"
              label="专业"
              :rules="[(val) => !!val || '请正确填写专业']"
            />
            <div class="text-h6">
              填写一下QQ号吧？（提供给mentor以便于解答福利题问题）
            </div>
            <br />
            <q-input
              ref="qq_ref"
              square
              outlined
              v-model="qq"
              label="你的QQ号（需要在招新群中）"
              :rules="[(val) => !!val || '请填写QQ号', isQQValid]"
            />

            <q-stepper-navigation>
              <q-btn
                unelevated
                @click="validateInfo"
                color="primary"
                label="整完了，下一步！"
              />
              <q-btn
                flat
                @click="step = 1"
                color="primary"
                label="返回上一步"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>
          <q-step
            :name="3"
            title="自我介绍"
            icon="add_comment"
            :done="done_intro"
            :error="err_intro"
          >
            <div class="text-h6">自我介绍一下吧！</div>
            <br />
            <q-editor v-model="intro" min-height="10rem" />
            <br />
            <q-stepper-navigation>
              <q-btn
                unelevated
                color="primary"
                @click="submit"
                label="全部完成，提交！"
              />
              <q-btn
                flat
                @click="step = 2"
                color="primary"
                label="返回上一步"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { AxiosResponse } from 'axios';
import { CommonResponse } from 'src/boot/axios';
import { defineComponent, ref } from 'vue';
import { useQuasar, QInput } from 'quasar';

export default defineComponent({
  name: 'Profile',
  components: {},
  methods: {
    isEmailValid(val: string) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      if (!emailPattern.test(val)) {
        this.done_account = false;
        this.err_account = true;
      }
      return emailPattern.test(val) || '邮箱格式不对哦...';
    },
    isPassValid(val: string) {
      const passwordStrongPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
      if (!passwordStrongPattern.test(val)) {
        this.done_account = false;
        this.err_account = true;
      }
      return (
        passwordStrongPattern.test(val) ||
        '密码太弱了！长度至少8位并包含大小写字母与数字，最好还能有特殊符号。'
      );
    },
    isStuIdValid(val: string) {
      if (val.length != 11) {
        this.done_info = false;
        this.err_info = true;
        return '长度不够啊...';
      }
      const pattern = /^(19|20|21)(0|1|2)[0-9]{3}[0-9]{5}$/;
      if (!pattern.test(val)) {
        this.done_info = false;
        this.err_info = true;
      }
      return pattern.test(val) || '学号格式不对哦..你真的是西电学生嘛？';
    },
    isLevelValid(val: string) {
      let level_num = Number.parseInt(val);
      // console.log(level_num);
      if ([2019, 2020, 2021].indexOf(level_num) != -1) {
        this.done_info = false;
        this.err_info = true;
      }
      return (
        [2019, 2020, 2021].indexOf(level_num) != -1 || '你真的是西电学生吗？'
      );
    },
    isTelValid(val: string) {
      const pattern =
        /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{4}\d{4}$/;
      if (!pattern.test(val)) {
        this.done_account = false;
        this.err_account = true;
      }
      return pattern.test(val) || '请使用中国大陆合法手机号！';
    },
    isQQValid(val: string) {
      const pattern = /^[1-9][0-9]{4,10}$/;
      if (!pattern.test(val)) {
        this.done_info = false;
        this.err_info = true;
      }
      return pattern.test(val) || '请正确填写QQ号！';
    },
    validateAccountInfo() {
      // console.log('validate account info here.');
      let ok = this.name_ref?.validate();
      if (ok) ok = this.email_ref?.validate();
      if (ok) ok = this.tel_ref?.validate();
      // console.log(ok);
      if (!ok?.valueOf()) {
        this.done_account = false;
        this.err_account = true;
        this.$q.notify({
          color: 'negative',
          message: '请认真填写!',
        });
      } else {
        // console.log('no errors found.');
        this.err_account = false;
        this.done_account = true;
        this.step = 2;
      }
    },
    validateInfo() {
      let ok = this.level_ref?.validate();
      if (ok) ok = this.stu_id_ref?.validate();
      if (ok) ok = this.major_ref?.validate();
      if (ok) ok = this.qq_ref?.validate();
      if (!ok?.valueOf()) {
        this.done_info = false;
        this.err_info = true;
        this.$q.notify({
          color: 'negative',
          message: '请认真填写!',
        });
      } else {
        // console.log('no errors found.');
        this.err_info = false;
        this.done_info = true;
        this.step = 3;
      }
    },
    submit() {
      this.$q.notify({
        spinner: true,
        message: '修改中，请稍候...',
        timeout: 3000,
      });
      if (
        !this.err_account &&
        !this.err_info &&
        !this.err_intro &&
        this.done_account &&
        this.done_info
      )
        void this.$api
          .put('/api/account/me', {
            name: this.name,
            email: this.email,
            'student-id': this.stu_id,
            major: this.major,
            telephone: this.tel,
            qq: this.qq,
            level: this.level,
            intro: this.intro,
          })
          .then((val: AxiosResponse<CommonResponse>) => {
            if (val.data.code != 0) {
              this.$q.notify({
                color: 'negative',
                message: val.data.msg,
              });
            } else {
              this.$q.notify({
                color: 'positive',
                message: '修改成功',
              });
            }
          });
      else {
        this.$q.notify({
          color: 'negative',
          message: '请检查是否有填写错误！',
        });
      }
    },
  },

  mounted: function () {
    interface userInterface {
      name: string;
      'student-id': string;
      major: string;
      telephone: string;
      email: string;
      qq: string;
      level: string;
      intro: string;
    }
    void this.$api
      .get('/api/account/me')
      .then((val: AxiosResponse<CommonResponse>) => {
        let content = val.data.data;
        console.log(content)
        let content_obj = content as userInterface;
        this.name = content_obj.name;
        this.stu_id = content_obj['student-id'];
        this.major = content_obj.major;
        this.tel = content_obj.telephone;
        this.email = content_obj.email;
        this.qq = content_obj.qq;
        this.level = content_obj.level;
        this.intro = content_obj.intro;
      });
  },

  setup() {
    const $q = useQuasar();
    const name = ref('');
    const stu_id = ref('');
    const intro = ref('');
    const qq = ref('');
    const tel = ref('');
    const email = ref('');
    const major = ref('');
    const level = ref('');

    return {
      $q,
      step: ref(1),
      done_account: ref(false),
      err_account: ref(false),
      done_info: ref(false),
      err_info: ref(false),
      done_intro: ref(false),
      err_intro: ref(false),
      done_human: ref(false),
      err_human: ref(false),

      name_ref: ref<QInput>(),
      email_ref: ref<QInput>(),
      intro_ref: ref<QInput>(),
      qq_ref: ref<QInput>(),
      tel_ref: ref<QInput>(),
      stu_id_ref: ref<QInput>(),
      major_ref: ref<QInput>(),
      level_ref: ref<QInput>(),

      name,
      stu_id,
      intro,
      qq,
      tel,
      email,
      major,
      level,
    };
  },
});
</script>
