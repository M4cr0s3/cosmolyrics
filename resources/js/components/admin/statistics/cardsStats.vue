<script setup>
import cardStat from './cardStat.vue';
</script>

<template>
    <div class="grid grid-cols-3 gap-4 mb-4">
        <RouterLink to="/admin/music">
            <cardStat
                gradient="gradient-music h-36  hover:scale-[1.02] transition ease-in-out delay-100 cursor-pointer"
                icon="material-symbols:music-video"
                width="5rem"
                height="5rem"
                top="21%"
                right="10%"
            >
                <template v-slot:title>Треки</template>
                <template v-slot:subtitle>Желаете посмотреть статистику треков?</template>
            </cardStat>
        </RouterLink>

        <RouterLink to="/admin/albums">
            <cardStat
                gradient="gradient-albums h-36  hover:scale-[1.02] transition ease-in-out delay-100 cursor-pointer"
                icon="material-symbols:library-music"
                width="5rem"
                height="5rem"
                top="16%"
                right="10%"
            >
                <template v-slot:title>Альбомы</template>
                <template v-slot:subtitle>Свежайшая статистика альбомов уже здесь</template>
            </cardStat>
        </RouterLink>
        <RouterLink to="/admin/users">
            <cardStat
                gradient="gradient-users h-36  hover:scale-[1.02] transition ease-in-out delay-100 cursor-pointer"
                icon="material-symbols:person-rounded"
                width="5rem"
                height="5rem"
                top="21%"
                right="8%"
            >
                <template v-slot:title>Пользователи</template>
                <template v-slot:subtitle>Статистика и информация о всех пользователях уже собрана</template>
            </cardStat>
        </RouterLink>
    </div>
</template>

<style scoped></style>
