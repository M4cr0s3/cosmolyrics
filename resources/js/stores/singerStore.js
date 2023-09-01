import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useSingerStore = defineStore('singer', {
    state: () => ({
        singer: null,
        error: null,
        loading: null,
    }),
    actions: {
        async getSinger(id) {
            try {
                this.loading = true
                let resp = await axios.get('/api/get_singer/' + id)
                this.singer = resp.data.singer
            } catch (err) {
                this.error = err.message
            } finally {
                this.loading = false
            }
        }
    }
})