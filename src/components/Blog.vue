<template>
    <div class="posts">
        <post v-for="post in posts" :key="post.slug" :slug="post.slug" v-once></post>
    </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
    name: 'blog',
    components: {
        Post
    },
    data() {
        return this.$store.state;
    }
};
</script>

<style lang="sass" scoped>
</style>
