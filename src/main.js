import jQuery from 'jquery';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import '@/components';

window.jQuery = jQuery;
window.$ = jQuery;

Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
let app = new Vue({
    router,
    render: h => h(App)
}).$mount('body');
