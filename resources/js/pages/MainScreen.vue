<script setup>
import UHeader from '../components/global/UHeader.vue';
import UButton from '../components/UButton.vue'
import AboutUs from '../components/AboutUs.vue';
import UFooter from '../components/global/UFooter.vue';
import {onMounted} from "vue";


</script>

<template>
    <main>
        <div class="background">
            <UHeader/>
            <img class="gradient-elem-one" src="../../assets/images/group-4.png" alt="">
            <img class="gradient-elem-two" src="../../assets/images/group-5.png" alt="">

            <div class="container mx-auto flex">
                <div class="flex max-[800px]:flex-wrap">
                    <div class="z-[3] w-[66.66%] relative" v-motion :initial="{ opacity: 0, x: -300 }"
                         :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }">
                        <div class="landing-text">
                            <h1 class="title max-[800px]:text-5xl max-[800px]:text-center">COSMOLYRICS</h1>
                        </div>
                        <div class="landing-desc">
                            <h2 class="desc max-[800px]:text-2xl max-[800px]:text-center max-[800px]:mt-[12px]">СЕРВИС ДЛЯ ПОИСКА ТЕКСТОВ ВАШИХ ЛЮБИМЫХ ПЕСЕН УЖЕ ЗДЕСЬ</h2>
                        </div>
                        <div class="mt-[2.2rem] flex justify-between w-[90%]">
                            <UButton>
                                НАЧАТЬ ПОЛЬЗОВАТЬСЯ
                            </UButton>
                            <UButton>
                                О СЕРВИСЕ
                            </UButton>
                        </div>
                    </div>
                    <div class="w=[33.33%] relative z-[3]" v-motion-roll-right>
                        <img src="../../assets/images/group-8.png" alt="" class="w-f">
                    </div>
                </div>
            </div>
        </div>
        <AboutUs/>
        <UFooter/>
    </main>
</template>

<style scoped>
.gradient-elem-one {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
}

.gradient-elem-two {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}

.landing-text {
    margin-top: 12rem;
    z-index: 2;
    position: relative;
}

.col-4 {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
}

.col-4 img {
    position: relative;
    z-index: 3;
}
</style>
