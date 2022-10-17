<script setup lang="ts">

const user = await useAsyncQuery(['getUser', { id: 1 }], { lazy: true })

const counter = useCounter()

const isOpen = useIsNavOpen();




</script>

<template>

<section class="bg-background-light dark:bg-background-dark">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our
                Executive Team</h1>

            <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
                alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                <PersonCard name="Jan Askov" description="Varm farman 🤗" birthdate="13 / 02 / 1962"
                    imgurl="https://media-exp1.licdn.com/dms/image/C5103AQFsm8dObJdzbg/profile-displayphoto-shrink_800_800/0/1516236198177?e=1671667200&v=beta&t=q3jTV1CQ4u6Ceg927LEgsU6INvRbH2e6di_MF98pc0o" />
                <PersonCard name="Mette Askov" description="Familie boss 🤠" birthdate="11 / 09 / 1964"
                    imgurl="https://scontent-cph2-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4EAL1NO1P3IAX9Vf1Zj&_nc_ht=scontent-cph2-1.xx&oh=00_AT8KuAkU-Fm3CqVjk5VozvGgeOnPfJQ2-Tu6tkyg2Pncjg&oe=637094F8" />
                <PersonCard name="Emma Askov" description="Stand up komiker 🤣😐 (den sjove)" birthdate="5 / 12 / 1997"
                    imgurl="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/83091685_10216375571922765_8334517091679862784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C1IWGzExt0cAX-3_7oK&tn=0X9lGtmo8TX18ext&_nc_ht=scontent-cph2-1.xx&oh=00_AT_TvbuGM53mpzPLnQKSLM8nnXO9WNb4mN3i_EzYWr4q-Q&oe=63714A84" />
                <PersonCard name="Oskar Askov" description="Mors eftergænger 🧑‍⚖️‍📝" birthdate="27 / 10 / 1999"
                    imgurl="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/108064483_3246791598718473_3304436513891469090_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zGMdiGA9OEEAX85i3aq&_nc_ht=scontent-cph2-1.xx&oh=00_AT-fM0NKHe6lGpVLWwAHSD8BVvD-yHE943B5ZDRbdnsanQ&oe=63732C1F" />
                <PersonCard name="Hans Askov" description="Fars dreng 🤓💻🤖" birthdate="27 / 10 / 1999"
                    imgurl="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/53472633_2272635566132355_4004951239950336000_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2weyqGFX0gEAX_d2Ppg&tn=0X9lGtmo8TX18ext&_nc_ht=scontent-cph2-1.xx&oh=00_AT8tAjWN_s-ef9ggSz5iIQsLn647-tWwiYM4gzwc4jCOZQ&oe=6371B67A" />
                <PersonCard name="Aske Askov" description="Artist og gamer 👨‍🎨🎮" birthdate="25 / 05 / 2004"
                    imgurl="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/294592439_1400730257101705_8415888199252941538_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ydhA8f-_67kAX_Aq5O-&tn=0X9lGtmo8TX18ext&_nc_ht=scontent-cph2-1.xx&oh=00_AT9yol0ABJFNTGi7AcK4cc1WTkJWsxn0S0Fh3DB1eLhkHg&oe=635184A7" />

            </div>
        </div>
    </section>
    

</template>
