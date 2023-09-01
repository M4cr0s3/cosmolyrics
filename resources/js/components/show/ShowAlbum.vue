<script setup>
import UHeader from '../global/UHeader.vue';
import { defineProps, onMounted, defineAsyncComponent } from 'vue'
import { useAlbumStore } from '../../stores/albumStore.js'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import ULoading from '../global/ULoading.vue';


const noSuchId = defineAsyncComponent(() =>
    import('../noSuchId.vue')
)

const { id } = defineProps({
    id: {
        type: String,
        default: ''
    }
})

const router = useRouter()
const albumStore = useAlbumStore()

const { album, error, loading } = storeToRefs(albumStore)

const showSong = (id) => {
    router.push('/songs/' + id)
}

onMounted(() => {
    albumStore.getAlbum(id)
})



</script>

<template>
    <div class="gradient">
        <UHeader />
        <div class="container mx-auto mt-[100px]" v-if="album">
            <h1 class="text-gray-50">
                Album: <span> {{ album.title }} </span>
            </h1>
            <h1 class="text-gray-50">
                Songs:
            </h1>
            <ul v-for="(song, i) in album.songs" :key="song.id">
                <li>
                    <a class="text-gray-50 underline" @click="showSong(song.id)"> {{ i }} — {{ song.name }}</a>
                </li>
            </ul>
        </div>
        <ULoading v-if="loading" />
        <noSuchId v-if="album === null && !loading">
            такого альбома.
        </noSuchId>
    </div>
</template>

<style scoped>
.gradient {
    min-height: 100vh;
}
</style>
