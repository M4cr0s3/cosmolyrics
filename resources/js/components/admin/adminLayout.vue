<template>
    <Navbar></Navbar>
    <slot></slot>
    <Sidebar></Sidebar>
</template>

<script setup>
import Navbar from "./navbar.vue";
import Sidebar from "./sidebar.vue";
</script>

<style scoped>

</style>
