<template>
<div id="index">
    <div class="container">
        <div class="placeholder">
            <div id="index-name" class="row-m">
                <div class="col-4-m push-8-m text-center">
                    <i class="fa fa-code fa-4x" aria-hidden="true"></i>
                </div>
                <div class="col-8-m pull-4-m">
                    <h1>Mohammad Amin Sameti</h1>
                    <span>Python Developer, Web Developer and Rustacean</span>
                </div>
            </div>
            <div id="index-nav" class="row text-center">
                <div class="col-6 col-3-m">
                    <router-link to="/blog" class="button">Blog</router-link>
                </div>
                <div class="col-6 col-3-m">
                    <tag-scroller selector="#projects" class="button">Projects</tag-scroller>
                </div>
                <div class="col-6 col-3-m">
                    <tag-scroller selector="#technologies" class="button">Technologies</tag-scroller>
                </div>
                <div class="col-6 col-3-m">
                    <tag-scroller selector="#contact" class="button">Contact</tag-scroller>
                </div>
            </div>
        </div>
    </div>
    <projects></projects>
</div>
</template>

<script>
import TagScroller from '@/components/TagScroller.vue';
import Projects from '@/components/Projects.vue';
export default {
    name: 'index',
    components: {
        TagScroller,
        Projects
    }
};
</script>

<style lang="sass" scoped>
@import '~@/styles/vamix';

.placeholder
    margin-top: 1em

    +breakpoint(m)
        margin: 4em auto 0 auto

#index-nav
    margin-bottom: 3em

    > div
        margin-top: 1em
</style>
