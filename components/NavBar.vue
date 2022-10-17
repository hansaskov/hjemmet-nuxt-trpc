<script setup lang="ts">
const isOpen = useIsNavOpen();


const username = "Hans Askov"
const image_url = "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/53472633_2272635566132355_4004951239950336000_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2weyqGFX0gEAX_d2Ppg&tn=0X9lGtmo8TX18ext&_nc_ht=scontent-cph2-1.xx&oh=00_AT8tAjWN_s-ef9ggSz5iIQsLn647-tWwiYM4gzwc4jCOZQ&oe=6371B67A"

</script>

<template>
   <nav ref = "nav_rect" class="relative bg-secondary shadow dark:bg-secondary">
    <div class="container px-6 py-4 mx-auto z-0">
        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex items-center justify-between">
                <div class="text-xl font-semibold">
                    <NuxtLink to="/" class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform  lg:text-3xl hover:text-white " >Askov.dk</NuxtLink>
                </div>

                <!-- Mobile menu button -->
                <div class="flex lg:hidden">
                    <button v-on:click="isOpen = !isOpen" type="button" class="text-gray-700 z-30  hover:text-gray-800  focus:outline-none" aria-label="toggle menu">
                        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 z-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 z-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class=" absolute top-full inset-x-0  transition-all  duration-300 ease-in-out bg-neutral-100 dark:bg-background-dark  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center" x-cloak :class="[isOpen ? 'opacity-100 translate-x-0 dark:text-white '  : 'opacity-0 -translate-x-full']">
                <div class="flex flex-col lg:flex-row lg:items-center lg:mx-8 ">
                    <NuxtLink to="/wishlists"   class="px-3 py-2 mx-3 mt-2 transition-colors hover:bg-background-light duration-300 transform rounded-md lg:mt-0  " :class="[isOpen ? ' hover:bg-secondary-dark dark:hover:bg-background-light dark:hover:text-black '  : '']" >Ønskelister</NuxtLink>
                    <NuxtLink to="/events"      class="px-3 py-2 mx-3 mt-2 transition-colors hover:bg-background-light duration-300 transform rounded-md lg:mt-0  " :class="[isOpen ? ' hover:bg-secondary-dark dark:hover:bg-background-light dark:hover:text-black  '  : '']">Begivenheder</NuxtLink>
                    <NuxtLink to="/user"        class="px-3 py-2 mx-3 mt-2 transition-colors hover:bg-background-light duration-300 transform rounded-md lg:mt-0    flex focus:outline-none " aria-label="toggle profile dropdown" :class="[isOpen ? ' hover:bg-secondary-dark dark:hover:bg-background-light dark:hover:text-black '  : '']">
                        <h3 class=" lg:hidden">{{username}}</h3>
                        <div class="mx-3 w-8 h-8 overflow-hidden border-2 border-primary-dark rounded-full">
                            <img :src= image_url class="object-cover w-full h-full" alt="avatar">
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</nav>

</template>