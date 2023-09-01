<template>
<!--    <navbar/>-->
<!--    <Info/>-->
<!--    <Sidebar/>-->
    <AdminLayout>
        <Info>
        </Info>
    </AdminLayout>
</template>

<script setup>

import Info from "./info.vue";
import Navbar from "./navbar.vue";
import Sidebar from "./sidebar.vue";
import AdminLayout from "./adminLayout.vue";
import {onMounted} from "vue";

onMounted(() => {
    document.title = 'Админ-панель'
})
</script>

<style scoped>

</style>
