<template>
  <div class="login">
    <h3>
      <span>登 录</span>
      <span class="login-us">/Login</span>
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
          登 录
        </a-button>
      </a-form-item>
      <a-form-item>
        <div class="register">
          <router-link to="/user/register"> 还没有账号？现在注册！ </router-link>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from 'vue-router';
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useForm } from '@ant-design-vue/use';
import { message } from 'ant-design-vue';
import { login } from "@/api/user.ts"
import { crypto } from "@/utils/crypto"
import { registerType } from '@/api/apiType'

export default defineComponent({
  name: "login",
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      loading: false,
      errorMessage: "",
      formInline: {
        username: "",
        password: "",
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
      },
    });
    const { validate } = useForm(state.formInline, state.rules);
    const handleSubmit = async () => {
      const encrypt: string = crypto.encrypt(state.formInline.password)
      const params: registerType = {
        username: state.formInline.username,
        password: encrypt
      }
      validate().then(async () => {
        state.loading = true
        login(params).then(res => {
          if (res.code === 0) {
            message.success('登录成功');
            router.push('/');
          }
          state.loading = false
        }).catch(err => {
          if (err.message === 'CustomError' && err.response.data.code === -1) {
            message.error(err.response.data.message)
          }
          state.loading = false
        })
      })
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
  