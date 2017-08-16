<template>
    <div>
        <router-link to="/" v-if="!is_home">&lt; Back</router-link>
    </div>
</template>

<script>
export default {
    name: 'global-navigation',
    data() {
        return {
            is_home: this.$route.path === '/'
        };
    }
};
</script>
