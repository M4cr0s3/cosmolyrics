<script setup>

import { ref } from 'vue'

</script>

<template>
    <div class="about-us-card" 
        v-motion-pop-visible
    >
        <div class="card-icon">
            <slot name="icon">
                icon
            </slot>
        </div>
        <div class="card-title">
            <slot name="title">
                title
            </slot>
        </div>
        <div class="card-desc">
            <slot name="desc">
                desc
            </slot>
        </div>
    </div>
</template>

<style scoped>
.card-title {
    color: #FFF;
    text-align: center;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%;
    margin-bottom: 14px;
    /* 33.6px */
}

.about-us-card {
    border-radius: 24px;
    background: linear-gradient(134deg, #3C2DE8 0%, #3CDAFD 100%);
    box-shadow: 0px 4px 20px 0px rgba(76, 61, 255, 0.50);
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 28px;
    margin-top: 60px;
    transition: .3s ease-in;
    position: relative;
}

.card-desc {
    color: #FFF;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 140%;
}

.card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 2px solid #FFF;
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.50);
    margin-bottom: 10px;
}

.about-us-card:hover {
    transform: scale(1.05);
    transition: .3s ease-in;
}
</style>

