<template>
    <body>
        <div class="vcenter-wrapper">
            <div>
                <transition name="fade-slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style src="./styles/global.sass" lang="sass"></style>
