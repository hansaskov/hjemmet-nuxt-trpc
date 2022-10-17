
<script setup lang="ts">

const props = defineProps<{
  name: string
  description: string
  birthdate: string
  imgurl: string
}>()

</script>

<template>
    <NuxtLink to="#"
        class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group bg-blue-100 dark:bg-neutral-700 hover:bg-blue-600 rounded-xl">
        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
            :src= props.imgurl >

        <h1 class="mt-4 text-4xl font-semibold text-gray-700 duration-300 capitalize dark:text-white group-hover:text-white">{{props.name}}</h1>
        <h3 class="mt-3 text-xl text-gray-500  duration-300 font-sans group-hover:text-white">{{props.birthdate}}</h3>
        <p class="mt-2 text-base text-gray-500 duration-300 capitalize dark:text-gray-300 group-hover:text-gray-300">{{props.description}}</p>
    </NuxtLink>
</template>