
<script setup lang="ts">
import { User } from '.prisma/client';
import { PropType } from 'vue';


const props = defineProps({
    user: {
        type: Object as PropType<User>,
        required: true,
    }
})

</script>

<template>
    <NuxtLink to="#" class="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group bg-orange-100 dark:bg-neutral-700 hover:bg-blue-600 rounded-xl">
        <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" :src="props.user.imageUrl!" >
        <h1 class="mt-4 text-4xl font-semibold text-gray-700 duration-300 capitalize dark:text-white group-hover:text-white">{{props.user.firstName}} {{props.user.lastName}}</h1>
        <h3 class="mt-3 text-xl text-gray-500  duration-300 font-sans group-hover:text-white">{{props.user.birthDate}}</h3>
        <p class="mt-2 text-base text-gray-500 duration-300 capitalize dark:text-gray-300 group-hover:text-gray-300">{{props.user.description}}</p>
    </NuxtLink>
</template>