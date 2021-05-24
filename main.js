import Vue from 'vue'
import App from './App'
import store from '@/common/store'
import cuCustom from '@/static/colorui/components/cu-custom.vue'
import router from '@/common/router'
import tools from '@/common/utils/tools'
import '@/common/utils/sdk/sdk-h5.js'
import {
	API_URL,
	IMG_URL
} from './env.js'

//引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

import shoproShare from '@/common/mixins/shopro-share'
Vue.mixin(shoproShare);

import {
	RouterMount
} from 'uni-simple-router'
import api from '@/common/request/index'

Vue.prototype.$store = store;
Vue.prototype.$api = api;
Vue.prototype.$tools = tools;
Vue.prototype.$API_URL = API_URL;
Vue.prototype.$IMG_URL = IMG_URL;

Vue.component('cu-custom', cuCustom);
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
	store,
	...App
});


// #ifdef H5
import wxsdk from '@/common/wechat/sdk'

Vue.prototype.$wxsdk = wxsdk;
RouterMount(app, '#app');
// #endif

// #ifndef H5
app.$mount();
// #endif
