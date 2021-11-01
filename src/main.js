import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//导入消息提示
import { Message, MessageBox } from 'element-ui'
Vue.prototype.$message = Message
Vue.prototype.$messagebox = MessageBox

//事件总线
Vue.prototype.$bus = new Vue()

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

//无缝滚动
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

import { request } from './network/request'
Vue.prototype.$axios = request

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    document.title = '中培国实（北京）检验检测技术研究院'
    next()
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')