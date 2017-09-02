import Vue from 'vue';
import Vuex from 'vuex';

import generatePosts from '@/posts';
import directory from 'babel-loader!dir-loader!@/data/posts';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        posts: generatePosts(directory)
    }
});

export default store;
