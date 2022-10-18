<script setup lang="ts">

const wish = defineProps({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    link: { type: String, required: false },
    imgUrl: { type: String, required: false, default: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" },

})

</script>

<template>

    <button>
        <div class="flex items-end overflow-hidden bg-cover rounded-lg lg:h-96 md:h-64  transform ease-in-out hover:scale-110 duration-300"
            :style="'background-position: center; background-image:url('+wish.imgUrl+')'">
            <div class="w-full h-2/7 px-4 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white"> {{wish.name}} </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-secondary-light ">
                    {{wish.description}}</p>
            </div>
        </div>
    </button>


</template>
