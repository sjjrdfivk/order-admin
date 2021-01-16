import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import 'ant-design-vue/dist/antd.css';
import { Button, Icon, Form, Input } from 'ant-design-vue'

const app = createApp(App)

app.use(Form)
app.use(Button)
app.use(Icon)
app.use(Input)

app.use(router)
app.mount('#app')