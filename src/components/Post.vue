<template>
    <div class="container">
        <router-link :to="url"><h1>{{ title }}</h1></router-link>
        <div>{{ date.format('dddd, MMMM Do YYYY') }}</div>
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    name: 'post',
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    data() {
        let post = this.$store.state.posts[this.slug];
        post = Object.assign({}, post);
        post.url = ['', 'blog',
            post.date.format('YYYY/MM/DD'),
            post.slug, ''].join('/');
        delete post.slug;
        return post;
    }
};
</script>

<style lang="sass">
</style>
