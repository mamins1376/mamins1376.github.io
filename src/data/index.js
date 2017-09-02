import Vue from 'vue';
import Vuex from 'vuex';

import generatePosts from '@/posts';
import directory from 'dir-loader-es6!@/data/posts';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        posts: generatePosts(directory)
    }
});

export default store;
