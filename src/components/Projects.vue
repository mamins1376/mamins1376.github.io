<template>
    <div id="projects" class="container">
        <h2>Projects</h2>
        <div class="project row-m" v-for="project in projects">
            <template v-if="project.image">
                <div class="push-8-m col-4-m text-center">
                    <img class="block" :src="url + '/' + project.image" :alt="project.name"/>
                </div>
                <div class="pull-4-m col-8-m">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.content }}</p>
                </div>
            </template>

            <div v-else class="col-12-m">
                <h3>{{ project.name }}</h3>
                <p>{{ project.content }}</p>
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
    mounted () {
        this.$nextTick(() => {
            $('.project').each(function () {
                let project = $(this);
                let height = project.height();
                height = Math.floor(height + 0.999).toString() + 'px';
                console.log(height);
                project.find('img').attr('height', height);
            });
        });
    }
};
</script>

<style lang="sass" scoped>
@import '~@/styles/vamix';

h2
    margin-bottom: 0.6em

.project
    margin: 0 $grid-gutter

    img
        max-width: 100%
</style>
