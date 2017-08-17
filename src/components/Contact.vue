<template>
    <div class="container">
        <div class="placeholder">
            <global-navigation></global-navigation>
            <h2>Contact Me</h2>
            <p>Feel free to</p>
            <ul class="fa-ul">
                <li v-for="link in links"><i :class="'fa-li fa fa-'+link.icon"></i><a
                        :href="link.url" targat="_blank">{{ link.title }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import links from '@/data/contact.json';

const data = { links };

export default {
    name: 'contact',
    data: () => data
};
</script>
