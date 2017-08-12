<template>
    <button @click="scroll()"><slot></slot></button>
</template>

<script>
export default {
    name: 'tag-scroller',
    props: {
        selector: String,
        duration: {
            type: Number,
            default: 1000
        }
    },
    methods: {
        scroll () {
            let target = $(this.selector);
            if (target.length !== 1) {
                return;
            }
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, this.duration);
        }
    }
};
</script>
