<template>
    <div class="gradient relative">
        <UHeader/>

        <div class="error404 container flex mx-auto mt-[10rem] max-lg:flex-wrap max-lg:flex-col">
            <div class="flex flex-col max-lg:w-[100%] w-[50%] justify-center max-lg:items-center">
                <h1 class="text-8xl text-gray-50 font-bold">Упс...</h1>
                <div class="flex items-center">
                    <h4 class="text-2xl text-gray-50 mt-1 mr-[10px]">Такой страницы на нашем сайте нет :(</h4>
                    <Icon icon="material-symbols:do-not-touch-rounded" color="#fff" height="30px" width="30px"></Icon>
                </div>

                <RouterLink to="/" class="text-xl text-gray-50 mt-2 underline dark:hover:text-violet-400 font-bold">Выход есть — перейдите на главную страницу.</RouterLink>
            </div>
            <div class="max-lg:w-[100%] w-[50%] max-lg:justify-center flex">
                <Icon icon="tabler:error-404" color="#fff" width="20rem" height="20rem"></Icon>
            </div>

        </div>


    </div>


</template>

<script setup>
import {Icon} from '@iconify/vue'
import UHeader from "../components/global/UHeader.vue";
</script>

<style scoped>
.gradient {
    min-height: 100vh;
}
</style>
