<template>
    <div id="techs" class="container">
        <global-navigation></global-navigation>
        <h2>Abilities</h2>
        <div class="row-m">
            <div class="tech col-6-m" v-for="tech in abilities">
                <h3>{{ tech.title }}</h3>
                <ul>
                    <li v-for="tip in tech.tips">{{ tip }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import abilities from '@/data/abilities';

const data = { abilities };

export default {
    name: 'abilities',
    data: () => data
};
</script>
