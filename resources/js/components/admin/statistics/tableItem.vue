<script setup>
import {Icon} from "@iconify/vue";


const props = defineProps({
    id: {
        type: Number
    },
    i: {
        type:  Number
    },
    name: {
        type: String
    },
    photo: {
        type: String
    },
    watches: {
        type:  Number
    },
    singers: {
        type: Array
    }
})

</script>

<template>
    <div class="flex w-full justify-between dark:bg-indigo-950 items-center rounded-lg shadow-md px-10 py-3 border-b
                        dark:border-indigo-900 dark:hover:bg-indigo-800 transition duration-250 ease-in-out">
        <div class="flex items-center">
            <div class="place mr-[5rem]">{{ props.id }}</div>
            <div class="track-info flex">
                <img :src="props.photo" alt="" class="rounded-md" style="height: 60px; width: 60px;">
                <div class="trackname flex items-center">
                    <h2 class="track__name ml-4 text-indigo-700">{{ props.name }}</h2>
                    <span class="ml-3 uppercase text-[10px] text-violet-400 font-bold"></span>
                </div>
            </div>
        </div>
        <div class="author" v-for="singer in props.singers" :key="singer.id">
            {{ singer.name }}
        </div>

        <div class="listens flex items-center">
            <Icon icon="mdi:eye" class="mr-[0.3rem]"/>
            {{ props.watches }}
        </div>
    </div>
</template>


<style scoped>

</style>
