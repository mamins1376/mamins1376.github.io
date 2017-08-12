import jQuery from 'jquery';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';

window.jQuery = jQuery;
window.$ = jQuery;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('body');
