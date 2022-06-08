import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "./assets/css/fonts/_tailwind.css";
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueTheMask from 'vue-the-mask';
import naive from 'naive-ui';

const app = createApp(App).use(router).use(VueTheMask).use(naive)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
