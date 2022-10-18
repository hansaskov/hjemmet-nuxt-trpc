<script setup lang="ts">

import { nameToJson } from '~~/utils/format';


const client = useClient()
const route = useRoute()

const stringName = route.params.fullname as string
const splitname = nameToJson(stringName)!
const user = await client.query('user.getUser', { firstName: splitname.firstName, lastName: splitname.lastName })

if (!user) {
    navigateTo('/');
}




const wishes = await client.query('post.getUserWishes', { userId: user!.id })


</script>

<template>
    <div>
        <section class="bg-background-light dark:bg-background-dark">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Hans' Ønsker</h1>
                <div class="grid grid-cols-2 gap-8 mt-8  2xl:grid-cols-4 lg:grid-cols-3">
                    <div v-for="wish in wishes">
                        <WishCard :wish="wish" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>