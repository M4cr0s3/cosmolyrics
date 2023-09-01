<template>
    <div class="gradient">
        <UHeader />
        <ULoading v-if="loading" />
        <div class="text-gray-50" v-if="!loading && song">
            <div class="">
                Song id:
                {{ song.id }}
            </div>
            <div class="">
                Song name:
                {{ song.name }}
            </div>
            <div class="">
                Song ph:
                <img :src="song.photo" alt="">
            </div>
            <div class="">
                Song Desc:
                {{ song.description }}
            </div>
            <div class="">
                <h1 class="text-2xl text-gray-50">Singers:</h1>
                <div class="" v-for="singer in song.singers">
                    <a class="underline" href="" @click.prevent="getSingerToShow(singer.id)">{{ singer.name }}</a>
                </div>
            </div>
        </div>
        <noSuchId v-if="song === null && !loading">
            такой песни.
        </noSuchId>
    </div>
</template>

<script setup>

import { ref, defineProps, onMounted, defineAsyncComponent } from 'vue'
import UHeader from "../global/UHeader.vue";
import ULoading from "../global/ULoading.vue";
import { useRouter } from "vue-router";
import { useSongStore } from '../../stores/songStore.js';
import { storeToRefs } from 'pinia';

const noSuchId = defineAsyncComponent(() =>
    import('../noSuchId.vue')
)

const { id } = defineProps({
    id: {
        type: String,
        default: ''
    }
})

const songStore = useSongStore()
const router = useRouter()

const { song, error, loading } = storeToRefs(songStore)

const getSingerToShow = (id) => {
    router.push('/singer/' + id)
}

onMounted(async () => {
    await songStore.getSong(id)
})


</script>

<style scoped>
.gradient {
    min-height: 100vh;
}
</style>
