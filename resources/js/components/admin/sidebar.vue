<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-indigo-950 dark:border-indigo-800" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-indigo-950">
      <ul class="space-y-2 font-medium">
         <li>
            <RouterLink to="/admin" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <Icon icon="material-symbols:team-dashboard" width="27px" height="27px"/>
               <span class="ml-3">Дэшборд</span>
            </RouterLink>
         </li>
         <!-- <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <Icon icon="ph:users-light" height="27px" width="27px"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
         </li> -->
         <!-- <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
         </li> -->
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <Icon icon="prime:sign-in" height="27px" width="27px"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Войти</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <Icon icon="solar:square-arrow-right-up-line-duotone" height="27px" width="27px"/>
               <span class="flex-1 ml-3 whitespace-nowrap">Зарегистрироваться</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

</template>
