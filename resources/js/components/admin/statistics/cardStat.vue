<script setup>
import {Icon} from '@iconify/vue';
import {defineProps, ref} from 'vue'

const {icon, top, right, width, height, to, gradient} = defineProps({
    icon: {
        type: String,
        default: '',
        },
    height: {
        type: String || Number,
        default: 5
    },
    width: {
        type: String || Number,
        default: 5
    },
    gradient: {
        type: String
    },
    top: {
        type: String
    },
    right: {
        type: String
    }
})

</script>

<template>
    <div
        class="flex items-center rounded bg-gray-50 dark:bg-gray-800 relative" :class="gradient">
        <div class="py-3 px-6">
            <p class="text-2xl text-white dark:text-white font-bold">
                <slot name="title"/>
            </p>
            <span class="text-xs font-semibold dark:text-gray-200">
                    <slot name="subtitle"/>
                </span>
            <Icon :icon="icon" class="absolute" :style="{top: top, right: right}" :height="height" :width="width" color="#fff"/>

        </div>

    </div>
</template>

<style scoped>
.gradient-music {
    background: linear-gradient(134deg, #3C2DE8 0%, #3CDAFD 100%);
    box-shadow: 0px 4px 20px 0px rgba(76, 61, 255, 0.50);
}

.gradient-albums {
    background: linear-gradient(134deg, rgb(241, 28, 28) 0%, rgb(211, 39, 179) 100%);
    box-shadow: 0px 4px 20px 0px rgba(241, 28, 28, 0.50);
}

.gradient-users {
    background: linear-gradient(134deg, rgb(211, 214, 14) 0%, rgb(25, 228, 25) 100%);
    box-shadow: 0px 4px 20px 0px rgba(25, 228, 25, 0.50);
}
</style>
