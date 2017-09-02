import Vue from 'vue';
import Router from 'vue-router';
import toTitleCase from 'title-case';

import Home from '@/components/Home';
import Blog from '@/components/Blog';
import Projects from '@/components/Projects';
import Abilities from '@/components/Abilities';
import Contact from '@/components/Contact';

Vue.use(Router);

function generateSection(component, path = null) {
    path = path || '/' + component.name;
    return {
        name: toTitleCase(component.name),
        path,
        component
    };
}

export default new Router({
    mode: 'history',
    routes: [
        generateSection(Home, '/'),
        generateSection(Blog),
        generateSection(Projects),
        generateSection(Abilities),
        generateSection(Contact)
    ]
});
