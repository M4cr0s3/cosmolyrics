<template>
    <div class="gradient">
        <UHeader />
        <div class="container mx-auto mt-10" v-if="singer">
            <h1 class="text-gray-50 ">Singer id:</h1>
            <div class="text-gray-50"> {{ singer.id }}</div>
            <div class="text-gray-50 mt-[12px]">
                <h1 class="text-gray-50 uppercase">
                    albums:
                </h1>
                <ul v-for="album in singer.albums" :key="album.id">
                    <li>
                        <a class="underline hover:cursor-pointer" @click="goToAlbumPage(album.id)">
                            {{ album.title }}
                        </a>
                    </li>
                </ul>
                <p v-if="singer && singer.albums !== undefined">
                    {{ singer.albums.length > 0 ? '' : 'Альбомов у данного исполнителя нет.' }}
                </p>


            </div>
            <div class="text-gray-50 mt-[12px]">
                <h1 class="text-gray-50 uppercase">
                    songs:
                </h1>
                <ul v-for="song in singer.songs" :key="song.id">
                    <li>
                        <a class="underline hover:cursor-pointer" @click="showSong(song.id)">{{ song.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <ULoading v-if="!singer"/>
        <noSuchId v-if="singer === null && !loading">
            такого исполнителя.
        </noSuchId>
    </div>
</template>

<script setup>

import { ref, defineProps, onMounted, defineAsyncComponent } from "vue";
import UHeader from "../global/UHeader.vue";
import { useRouter } from "vue-router";
import { useSingerStore } from '../../stores/singerStore.js'
import { storeToRefs } from "pinia";
import ULoading from "../global/ULoading.vue";

const noSuchId = defineAsyncComponent(() =>
    import('../noSuchId.vue')
)

const singerStore = useSingerStore()
const router = useRouter()

const { id } = defineProps({
    id: {
        default: '',
        type: String
    }
})

const { singer, error, loading } = storeToRefs(singerStore)

const goToAlbumPage = (id) => {
    router.push('/album/' + id)
}

const showSong = (id) => {
    router.push('/songs/' + id)
}

onMounted(() => {
    singerStore.getSinger(id);
});

</script>

<style scoped>
.gradient {
    min-height: 100vh;
}
</style>
