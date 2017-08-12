<template>
    <body>
        <router-view></router-view>
    </body>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style lang="sass">
$base-font-family: 'Droid Sans'

@import ~getbase/src/scss/base

.button
    border-color: black
    color: black
    background-color: white
</style>
