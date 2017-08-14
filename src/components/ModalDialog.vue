<template>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="display">
            <div class="modal-container" @click.stop>
                <div class="modal-placeholder">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal-dialog',
    props: {
        display: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    },
    mounted() {
        document.addEventListener('keydown', e => {
            if (this.display && e.keyCode === 27) {
                this.close();
            }
        });
    }
};
</script>

<style lang="sass" scoped>
.modal-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 10
    background-color: rgba(0, 0, 0, .5)
    transition: opacity 300ms ease

    .modal-container
        max-width: 500px
        margin: 40px auto

        .modal-placeholder
            margin: 0 20px
            padding: 20px 30px
            background-color: white
            box-shadow: 0 0 8px rgba(0, 0, 0, .3)
            transition: all 300ms ease

// transition effect
.modal-
    &enter, &leave-active
        opacity: 0

        .modal-placeholder
            transform: scale(1.1)
</style>
