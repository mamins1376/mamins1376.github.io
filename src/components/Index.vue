<template>
    <div class="placeholder">
        <h1>Mohammad Amin Sameti</h1>
        <span>Python Developer, Web Developer and Rustacean</span>
        <div class="row">
            <div class="col-full col-3-m">
                <router-link to="/blog" class="button">Blog</router-link>
            </div>
            <div class="col-full col-3-m">
                <router-link to="/projects" class="button">Projects</router-link>
            </div>
            <div class="col-full col-3-m">
                <router-link to="/technologies" class="button">Technologies</router-link>
            </div>
            <div class="col-full col-3-m">
                <router-link to="/contact" class="button">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index'
};
</script>

<style lang="sass" scoped>
@import ~getbase/src/scss/base/_variables
@import ~getbase/src/scss/base/_mixins

.placeholder
    margin: 3em auto 0 auto
    +breakpoint(m)
        max-width: 70%

    > div
        margin-top: 2em

h1
    font-weight: normal
</style>
