<script setup>
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
import ULoading from "./ULoading.vue";
import { useSongsStore } from '../../stores/songsStore';
import { storeToRefs } from 'pinia'

const router = useRouter();
const songStore = useSongsStore()


onMounted(async () => {
  if (songStore.songs.length === 0) {
    await songStore.getSongs();
  }
});

const { songs, pagination, error, loading } = storeToRefs(songStore)

const showSong = (id) => {
    router.push('/songs/' + id)
}

</script>

<template>
    <div class="mt-[20px]">
        <h1 class="text-5xl text-gray-50 font-bold mb-5">
            <slot name="title"></slot>
        </h1>
        <div class="">
            <div class="chart-table" v-for="(song, i) in songs" :key="song.id">
                <a @click.prevent="showSong(song.id)" class="flex items-center text-indigo-700">
                    <div class="flex w-full justify-between dark:bg-indigo-950 items-center rounded-lg shadow-md px-10 py-3 border-b
                        dark:border-indigo-900 dark:hover:bg-indigo-800 transition duration-250 ease-in-out">
                        <div class="flex items-center">
                            <div class="place mr-[5rem]">{{ i + 1 }}</div>
                            <div class="track-info flex">
                                <img src="https://placehold.co/60x60" alt="" class="rounded-md">
                                <div class="trackname flex items-center">
                                    <h2 class="track__name ml-4 text-indigo-700">{{ song.name }}</h2>
                                    <span class="ml-3 uppercase text-[10px] text-violet-400 font-bold">lyrics</span>
                                </div>
                            </div>
                        </div>
                        <div class="author" v-for="singer in song.singers">
                            {{ singer.name }}
                        </div>

                        <div class="listens flex items-center">
                            <Icon icon="mdi:eye" class="mr-[0.3rem]" />{{ song.watches > 1000 ? Math.round((song.watches /
                                1000) * 100) / 100 + 'K' : song.watches }}
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="w-full flex justify-center" v-if="songs && !loading && pagination.current_page !== 10">
            <button @click.prevent="songStore.getSongs(pagination.current_page + 1)" class="load-more px-5 py-5 items-center text-violet-400 dark:bg-indigo-950 w-48 mt-[20px] rounded-md shadow-sm
                dark:hover:bg-indigo-800 transition duration-250 ease-in-out font-semibold">
                Загрузить еще
            </button>
        </div>
        <ULoading v-else-if="songs.length !== 100" />
    </div>
</template>
<style scoped></style>
