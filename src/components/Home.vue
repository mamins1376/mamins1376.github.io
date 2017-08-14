<template>
    <div class="container">
        <div class="placeholder">
            <div id="index-name" class="row-m">
                <div class="col-4-m push-8-m text-center">
                    <div class="dev-logo"><span class="lt">&lt;</span><span class="sl">/</span><span class="gt">&gt;</span></div>
                </div>
                <div class="col-8-m pull-4-m">
                    <h1>Mohammad Amin Sameti</h1>
                    <span>Python Developer, Web Developer and Rustacean</span>
                </div>
            </div>
            <div id="home-nav" class="row text-center">
                <div class="col-6 col-3-m">
                    <router-link to="/blog">Blog</router-link>
                </div>
                <div class="col-6 col-3-m">
                    <router-link to="/projects">Projects</router-link>
                </div>
                <div class="col-6 col-3-m">
                    <router-link to="/technologies">Technologies</router-link>
                </div>
                <div class="col-6 col-3-m">
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home'
};
</script>

<style lang="sass" scoped>
.dev-logo
    font-size: 76px
    line-height: 76px
    animation: blink 4s ease infinite

    .lt, .gt
        position: relative
        top: -6px

@keyframes blink
    0%
        opacity: .7
    50%
        opacity: .3
    100%
        opacity: .7

#home-nav > div
        margin-top: 1.4em
</style>
