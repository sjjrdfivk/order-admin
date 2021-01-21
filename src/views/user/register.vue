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
import { useRouter } from 'vue-router';
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useForm } from '@ant-design-vue/use';
import { message } from 'ant-design-vue';
import { register } from "@/api/user.ts"
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
          {
            pattern: "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$",
            message: "密码至少包含 数字和英文，长度6-20",
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
    const { validate } = useForm(state.formInline, state.rules);
    const handleSubmit = async () => {
      validate().then(async () => {
        state.loading = true
        const password: string = crypto.encrypt(state.formInline.password)
        const confirm: string = crypto.encrypt(state.formInline.confirm)
        const params: registerType = {
          username: state.formInline.username,
          password,
          confirm
        }
        const { code } = await register(params)
        if (code === 0) {
          message.success('注册成功');
          router.replace('/user/login');
        }
        state.loading = false
      }).catch(err => {
        state.loading = false
        console.log('error', err);
      });
    };
    return {
      ...toRefs(state),
      handleSubmit,
      validate,
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
  