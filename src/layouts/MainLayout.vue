<template>
  <q-layout view="hHh lpr fff">
    <q-header>
      <q-toolbar
        class="text-black row no-wrap items-center q-px-none"
        style="background-color: #f0f0f0"
      >
        <q-avatar class="q-ml-md">
          <img src="icons/icon.svg" />
        </q-avatar>
        <q-toolbar-title shrink style="font-size: 16px; font-weight: 600">
          西电微软学生俱乐部&nbsp;&nbsp;|&nbsp;&nbsp;招新
        </q-toolbar-title>
        <q-tabs
          :stretch="true"
          :shrink="false"
          narrow-indicator
          indicator-color="blue"
          v-model="tab"
          class="hidden-in-mobile"
        >
          <q-route-tab to="index" name="index" label="简介" />
          <q-route-tab to="department" name="department" label="部门" />
          <q-route-tab to="mentors" name="mentors" label="人物" />
          <q-route-tab to="questions" name="questions" label="福利题" />
          <q-route-tab
            to="admin"
            v-if="is_admin"
            name="admin_site"
            label="后台管理"
          />
          <q-route-tab
            to="index"
            v-if="is_admin"
            name="interview"
            label="面试"
          />
          <q-route-tab
            to="index"
            v-if="is_admin"
            name="interview_queue"
            label="面试情况"
          />
        </q-tabs>
        <q-space />
        <q-btn class="hidden-in-mobile" v-if="!login" to="login" flat stretch>
          登录
        </q-btn>
        <q-btn
          class="hidden-in-mobile"
          v-if="!login"
          to="register"
          flat
          stretch
        >
          注册（报名加入）
        </q-btn>
        <q-btn class="hidden-in-mobile" v-if="login" to="profile" flat stretch
          >你好，{{ user_name }}</q-btn
        >
        <q-btn
          class="hidden-in-mobile"
          v-if="login"
          flat
          stretch
          icon="logout"
          @click="logout"
        ></q-btn>
        <q-btn
          class="show-in-mobile"
          flat
          stretch
          icon="menu"
          @click="toggleSideBar"
        ></q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      show-if-above
      v-if="side_bar_open"
      v-model="side_bar_open"
      side="right"
      bordered
    >
      <q-list>
        <q-item clickable v-ripple to="index">
          <q-item-section>主页</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="department">
          <q-item-section>部门</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="mentors">
          <q-item-section>人物</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="questions">
          <q-item-section>福利题</q-item-section>
        </q-item>
        <q-item clickable v-if="!login" v-ripple to="login">
          <q-item-section>登录</q-item-section>
        </q-item>
        <q-item clickable v-if="!login" v-ripple to="register">
          <q-item-section>注册（报名加入）</q-item-section>
        </q-item>
        <q-item clickable v-if="login" v-ripple to="profile">
          <q-item-section>你好，{{ user_name }}</q-item-section>
        </q-item>
        <q-item clickable v-if="login" v-ripple @click="logout">
          <q-item-section>退出</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar
        class="text-black row no-wrap items-center q-px-none"
        style="background-color: #dddddd"
      >
        <q-space></q-space>
        <div class="flex flex-center">
          Copyright © 2020-2021 西电微软学生俱乐部 &nbsp;&nbsp;&nbsp; |
          &nbsp;&nbsp;&nbsp;
          <a
            style="
              text-decoration: none;
              color: #333333;
              letter-spacing: 1px;
              color: #333333;
            "
            href="http://beian.miit.gov.cn"
            >滇ICP备14005090号</a
          >
        </div>
        <q-space></q-space>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Base64 } from 'js-base64';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  methods: {
    logout() {
      void this.$api.get('/api/account/logout').then(() => {
        localStorage.clear();
        location.reload();
      });
    },
  },

  setup() {
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined') {
      localStorage.removeItem('token')
    }

    const login = ref(false);
    const user_name = ref('');
    const is_admin = ref(false);
    if (token && token !== 'undefined') {
      const content = token.split('.')[1];
      console.log(content);
      let content_raw = Base64.decode(content);
      interface TokenObj {
        name: string;
        'user-id': number;
        admin: boolean;
      }
      let content_obj: TokenObj = JSON.parse(content_raw) as TokenObj;
      user_name.value = content_obj.name;
      login.value = true;
      localStorage.setItem('login', 'true');
      is_admin.value = content_obj.admin;
      localStorage.setItem('admin', content_obj.admin ? 'true' : 'false');
    } else {
      localStorage.setItem('login', 'false');
      localStorage.setItem('admin', 'false');
    }
    const side_bar_open = ref(false);

    function toggleSideBar() {
      side_bar_open.value = !side_bar_open.value;
    }
    // const is_admin = ref(true);
    return {
      tab: ref('index'),
      login,
      user_name,
      is_admin,
      side_bar_open,
      toggleSideBar,
    };
  },
});
</script>

<style scoped>
.hidden-in-mobile {
  display: flex;
}
.show-in-mobile {
  display: none;
}
@media (max-width: 800px) {
  .hidden-in-mobile {
    display: none;
  }
  .show-in-mobile {
    display: flex;
  }
}
</style>
