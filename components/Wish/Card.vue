<script setup lang="ts">
import { Wish } from '.prisma/client';
import { PropType } from 'vue';

const props = defineProps({
    wish: {
        type: Object as PropType<Wish>,
        required: true,
    }
})

</script>

<template>
        <NuxtLink :to="props.wish.link!" class="flex items-end overflow-hidden bg-cover rounded-lg h-96 transform hover:scale-110 duration-300"
            :style="'background-position: center; background-image:url('+props.wish.imageUrl+')'">
            <div class="w-full h-2/7 px-4 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white"> {{props.wish.name}} </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-secondary-light">{{props.wish.description}}</p>
            </div>
        </NuxtLink>
</template>
