import jQuery from 'jquery';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/data';
import '@/components';

window.jQuery = jQuery;
window.$ = jQuery;

Vue.config.productionTip = false;

let app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('body');

if (process.env.NODE_ENV === 'development') {
    window.app = app;
}

export default app;
