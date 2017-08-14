<template>
    <div id="projects" class="container">
        <h2>Projects</h2>
        <div class="project row-m" v-for="project in projects">
            <template v-if="project.image">
                <div class="push-8-m col-4-m text-center">
                    <img class="block" :src="url+'/'+project.image" :alt="project.name"/>
                </div>
                <div class="pull-4-m col-8-m">
                    <h3>{{ project.name }}</h3>
                    <div>{{ project.content }}</div>
                    <a v-if="project.url" :href="project.url" :alt="'See '+project.name">Take a look!</a>
                </div>
            </template>

            <div v-else class="col-12-m">
                <h3>{{ project.name }}</h3>
                <div>{{ project.content }}</div>
                <a v-if="project.url" :href="project.url" :alt="'See '+project.name">Take a look!</a>
            </div>
        </div>
    </div>
</template>

<script>
import URL from 'url-parse';
import projects from '@/data/projects';

const url = URL(location.toString()).origin;
const data = { projects, url };

export default {
    name: 'projects',
    data: () => data,
    mounted() {
        this.$nextTick(() => {
            $('.project').each(function() {
                let project = $(this);
                let height = project.height();
                height = Math.floor(height + 0.999).toString() + 'px';
                project.find('img').attr('height', height);
            });
        });
    }
};
</script>

<style lang="sass" scoped>
@import '~@/styles/vamix';

#projects
    margin-top: 1em

h2
    margin-bottom: 0.6em

.project
    margin: 0 $grid-gutter 2em $grid-gutter

    img
        max-width: 100%
</style>
