<template>
    <div id="techs" class="container">
        <global-navigation></global-navigation>
        <h2>Technologies</h2>
        <div class="row-m">
            <div class="tech col-6-m" v-for="tech in technologies">
                <h3>{{ tech.title }}</h3>
                <ul>
                    <li v-for="tip in tech.tips">{{ tip }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import technologies from '@/data/technologies';

const data = { technologies };

export default {
    name: 'technologies',
    data: () => data
};
</script>
