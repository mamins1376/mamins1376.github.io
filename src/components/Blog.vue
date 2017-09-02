<template>
    <div class="posts">
        <post v-for="post in posts" :key="post.slug" :title="post.title" :date="post.date" v-once>{{ post.content }}</post>
    </div>
</template>

<script>
import Post from '@/components/Post.vue';
import generatePosts from '@/posts';
import directory from 'dir-loader!@/data/posts';

let posts = generatePosts(directory);

export default {
    name: 'blog',
    components: {
        Post
    },
    data: () => ({ posts })
};
</script>

<style lang="sass" scoped>
</style>
