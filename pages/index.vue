<script setup lang="ts">

const client = useClient()

const users = await client.query('user.getUsers')

</script>

<template>

    <div>
        <section class="bg-background-light dark:bg-background-dark">
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:-mx-6 lg:flex lg:items-center">
                    <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                        src="puplic/hus.jpg"
                        alt="">

                    <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

                        <h1 class="text-2xl font-semibold text-gray-800 dark:text-white xl:text-4xl lg:w-128">
                            Velkommen til Familien Askov
                        </h1>

                        <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero
                            ad
                            tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum,
                            culpa
                            aperiam dolorum, obcaecati corrupti aspernatur a. ”
                        </p>

                        <h3 class="mt-6 text-lg font-medium text-secondary-dark dark:text-secondary">Mia Brown</h3>
                        <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

                    </div>
                </div>
            </div>
        </section>

        <section class="bg-background-light dark:bg-background-dark">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Mød familiemedlemmerne 😎</h1>

                <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    For at se de individuelles ønskelister tryk på de respektive medlemmer
                </p>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div v-for="user in users">
                        <UserCard :user="user" />
                    </div>
                </div>
            </div>
        </section>

    </div>





</template>
