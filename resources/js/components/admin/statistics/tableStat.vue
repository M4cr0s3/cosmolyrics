<script setup>
import TableItem from "@/components/admin/statistics/tableItem.vue";
import {useAdmSongsStore} from "../../..//stores/admSongsStore.js";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";

const store = useAdmSongsStore()

const {
    songs, current_page, last_page, last_page_url, links,
    next_page_url, prev_page_url, to
} = storeToRefs(store)


onMounted(() => {
    store.getSongs()
})



</script>


<template>
    <div class="mt-[20px] px-4">
        <div class="flex justify-between items-center">
            <h1 class="text-5xl text-gray-50 font-bold mb-5">
                <slot name="title"></slot>
            </h1>



        </div>

        <div class="">
            <div class="chart-table">
                <a class="flex items-center text-indigo-700" v-for="song in songs" :key="song.id">
                    <TableItem
                        :id="song.id"
                        :name="song.name"
                        :photo="song.photo"
                        :watches="song.watches"
                        :singers="song.singers"
                    >
                    </TableItem>
                </a>
            </div>
        </div>
    </div>
    <div class="" v-if="links">
        <div class="w-full flex gap-1 mt-4 justify-center px-4">
            <li v-for="link in links">
                <template v-if="Number(link.label) &&
                (current_page - link.label < 2 && current_page - link.label > -2) ||
                Number(link.label) === 1 || Number(link.label) === last_page">
                    <a href="#" @click.prevent="store.getSongs(link.label, limit)" class="dark:text-indigo-700 rounded-lg dark:bg-indigo-950 h-[45px] w-[45px] flex justify-center items-center hover:cursor-pointer"
                       :class="link.active ? 'dark:text-violet-400 dark:bg-indigo-800' : ''">
                        {{ link.label }}
                    </a>
                </template>
                <template v-if="Number(link.label) &&
                current_page !== 3 && current_page - link.label === 2 ||
                Number(link.label) &&
                current_page !== last_page - 2 &&
                (current_page - link.label === -2)">
                    <div class="dark:text-indigo-700 rounded-lg dark:bg-indigo-950 h-[45px] w-[45px] flex justify-center items-center hover:cursor-pointer">
                        ...
                    </div>
                </template>
            </li>
        </div>
    </div>

</template>

<style scoped>
li {
    list-style: none;
}
</style>
