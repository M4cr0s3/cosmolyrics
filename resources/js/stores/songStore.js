import axios from 'axios';
import { defineStore } from 'pinia';

export const useSongStore = defineStore('song', {
    state: () => ({
        song: null,
        error: null,
        loading: false
    }),
    actions: {
        async getSong(id) {
            try {
                this.loading = true
                let resp = await axios.get('/api/get_song_to_show/' + id)
                this.song = resp.data.song
            } catch (err) {
                this.error = err.message
            } finally {
                this.loading = false
            }
        }
    }
})