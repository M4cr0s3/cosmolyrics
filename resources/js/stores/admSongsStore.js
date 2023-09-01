import {defineStore} from "pinia";
import axios from "axios";

export const useAdmSongsStore = defineStore('songs', {
    state: () => ({
        songs: null,
        current_page: null,
        last_page: null,
        last_page_url: null,
        links: null,
        next_page_url: null,
        prev_page_url: null,
        to: null,
    }),
    actions: {
        async getSongs(page = 1) {
            if (page === this.current_page) return
            try {
                const resp = await axios.get(`/api/get_songs_to_stats?page=${page}`)
                console.log(resp)
                console.log(this.limit)
                this.songs = resp.data.all_songs.data
                this.current_page = resp.data.all_songs.current_page
                this.last_page = resp.data.all_songs.last_page
                this.last_page_url = resp.data.all_songs.last_page_url
                this.links = resp.data.all_songs.links
                this.next_page_url = resp.data.all_songs.next_page_url
                this.prev_page_url = resp.data.all_songs.prev_page_url
                this.to = resp.data.all_songs.to
            } catch (err) {
                this.error = err.message
            }
        },
    }
})
