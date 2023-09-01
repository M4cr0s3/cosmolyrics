import { createRouter, createWebHistory } from "vue-router";
import MainScreen from '../pages/MainScreen.vue';
import TopSongs from '../pages/TopSongs.vue'
import Error404 from '../pages/Error404.vue'
import ShowSong from "../components/show/ShowSong.vue";
import SingerShow from "../components/show/ShowSinger.vue";
import ShowAlbum from '../components/show/ShowAlbum.vue'
import adminPage from '../components/admin/adminPage.vue'
import musicStat from '../components/admin/musicStatistics/musicStat.vue'
import albumStat from '../components/admin/albumStatistics/albumStat.vue'
import userStat from '../components/admin/userStatistics/userStat.vue'

const router = createRouter({
    history: createWebHistory(),
    mode: "hash",
    routes: [
        {
            name: 'MainScreen',
            path: '/',
            component: MainScreen,
            meta: {
                title: 'Главная страница'
            }
        },
        {
            name: 'TopSongs',
            path: '/top_songs',
            component: TopSongs,
            meta: {
                title: 'Топ песен'
            }
        },
        {
            name: 'ShowSong',
            path: '/songs/:id',
            component: ShowSong,
            props: true,
            meta: {
                title: 'Информация о песне'
            }
        },
        {
            name: 'ShowSinger',
            path: '/singer/:id',
            component: SingerShow,
            props: true,
            meta: {
                title: 'Информация об исполнителе'
            }
        },
        {
            name: 'ShowAlbum',
            path: '/album/:id',
            component: ShowAlbum,
            props: true,
            meta: {
                title: 'Информация об альбоме'
            }
        },
        {
            name: 'AdminPage',
            path: '/admin',
            component: adminPage,
            meta: {
                title: 'Админ-панель'
            }
        },
        {
            name: 'AdminMusicStat',
            path: '/admin/music',
            component: musicStat,
            meta: {
                title: 'Статистика по музыке'
            }
        },
        {
            name: 'AdminAlbumsStat',
            path: '/admin/albums',
            component: albumStat,
            meta: {
                title: 'Статистика по альбомам'
            }
        },
        {
            name: 'AdminUsersStat',
            path: '/admin/users',
            component: userStat,
            meta: {
                title: 'Статистика по пользователям'
            }
        },
        {
            name: '404',
            path: '/:pathMatch(.*)*',
            component: Error404,
            meta: {
                title: 'Ошибочка...'
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });

export default router
