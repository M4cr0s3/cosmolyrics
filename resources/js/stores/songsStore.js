import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useSongsStore = defineStore('songs', {
    state: () => ({
        error: ref(),
        loading: ref(false),
        songs: ref([]),
        pagination: {
            current_page: 1,
            from: 1,
            last_page: 1,
            links: [],
        },
    }),
    actions: {
        async getSongs(page = 1) {
            try {
                this.loading = true
                const resp = await axios.get(`/api/get_top_songs?page=${page}`)
                this.songs.push(...resp.data.songs.data);
                this.pagination.current_page = resp.data.songs.current_page
                this.pagination.from = resp.data.songs.from
                this.pagination.last_page = resp.data.songs.last_page
                this.pagination.links = resp.data.songs.links
                console.log(this.songs.length)
            } catch (err) {
                this.error = err.message
            } finally {
                this.loading = false
            }
        }
    }
})


