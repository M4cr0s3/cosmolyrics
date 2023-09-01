import axios from 'axios'
import {defineStore} from "pinia";

export const useMusicStatStore = defineStore('music', {
    state: () => ({
        singer_count: null,
        song_count: null,
        total_watches: null,
        genre_listen_counts: [],
        top_song: null,
    }),
    actions: {
        async getStats() {
            try {
                let response = await axios.get('/api/get_music_stats')
                this.singer_count = response?.data?.singer_count
                this.song_count = response?.data?.song_count
                this.total_watches = response?.data?.total_watches
                this.genre_listen_counts = response?.data?.genre_listen_counts
                this.top_song = response?.data?.top_song
            } catch(e) {
                console.log('Something went wrong while fetching data', e.message)
            }
        }
    },
})
