import { defineStore } from "pinia";
import axios from "axios";

export const useAlbumStore = defineStore('album', {
    state: () => ({
        album: null,
        error: null,
        loading: null
    }),
    actions: {
        async getAlbum(id) {
            try {
                this.loading = true
                let resp = await axios.get('/api/get_album/' + id)
                this.album = resp?.data?.album
                console.log(this.album.songs)
            } catch (e) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        }
    }
})