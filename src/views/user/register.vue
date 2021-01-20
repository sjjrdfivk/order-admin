<template>
  <div class="login">
    <h3>
      <span>注 册</span>
      <span class="login-us">/register</span>
    </h3>
    <a-form
      class="login-form"
      :model="formInline"
      :rules="rules"
      @submit="handleSubmit"
      @submit.prevent
      :wrapper-col="{ span: 24 }"
    >
      <a-form-item name="username">
        <a-input
          v-model:value="formInline.username"
          size="large"
          placeholder="用户名"
        >
          <template v-slot:prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item name="password">
        <a-input-password
          v-model:value="formInline.password"
          size="large"
          type="password"
          placeholder="密码"
        >
          <template v-slot:prefix><lock-outlined type="user" /></template>
        </a-input-password>
      </a-form-item>
      <a-form-item name="confirm">
        <a-input-password
          v-model:value="formInline.confirm"
          size="large"
          type="password"
          placeholder="确认密码"
        >
          <template v-slot:prefix><lock-outlined type="user" /></template>
        </a-input-password>
      </a-form-item>
      <div class="login-error">{{ errorMessage }}</div>
      <a-form-item>
        <a-button
          class="login-form-button"
          type="primary"
          html-type="submit"
          size="large"
          :loading="loading"
          block
        >
          注 册
        </a-button>
      </a-form-item>
      <a-form-item>
        <div class="register">
          <router-link to="/user/login"> 已有账号？现在登录！ </router-link>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
// import { register } from "@/api/user.ts"
export default defineComponent({
  name: "login",
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const state = reactive({
      loading: false,
      errorMessage: "",
      formInline: {
        username: "",
        password: "",
        confirm: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
        ],
        confirm: [
          {
            validator: (rule: any, value: string) => {
              if (value === "") {
                return Promise.reject('请输入确认密码！');
              } else if (value !== state.formInline.password) {
                return Promise.reject("您输入的两个密码不匹配！");
              } else {
                return Promise.resolve();
              }
            },
          },
        ],
      },
    });
    const handleSubmit = async (e: any) => {
      console.log(e)
      const { username, password, confirm } = state.formInline;
      console.log(username, password, confirm);
    };
    return {
      ...toRefs(state),
      handleSubmit,
    };
  },
});
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  right: 10%;
  top: 50%;
  width: 420px;
  height: 450px;
  background: #ffffff;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.4);
  margin: -250px 0 0 -210px;
  z-index: 10;
  h3 {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-bottom: 2px solid #d4d4d44a;
    .login-us {
    }
  }
  .login-form {
    padding: 20px;
    margin-top: 40px;
  }
  .login-form-button {
    width: 100%;
    height: 40px;
    margin-top: 6px;
  }
  .login-error {
    color: red;
    height: 20px;
  }
  .register {
    float: right;
  }
}
</style>
  