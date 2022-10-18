<script setup lang="ts">

import { nameToJson } from '~~/utils/format';

const route = useRoute()
const stringName  = route.params.fullname as string
const splitname = nameToJson(stringName)!
const {data: user} = await useAsyncQuery(['user.getUser', {firstName: splitname.firstName, lastName: splitname.lastName} ])

</script>

<template>
    <div>
        <section class="bg-background-light dark:bg-background-dark">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            {{splitname.firstName}}' Ønsker</h1>

        <div class="grid grid-cols-2 gap-8 mt-8  2xl:grid-cols-4 lg:grid-cols-3">

            <WishCard name="M- wave skaterhjelm, blank hvid" description="Cykelhjelm" img-url="https://ecykelhjelm.dk/4846-large_default/m-wave-skaterhjelm-blank-hvid-billigste.jpg"/>
            <WishCard name="Deltaco Gaming DK420BR" description="Mekanisk Keyboard" img-url="https://www.maxgaming.dk/bilder/artiklar/17633.jpg?m=1607246992"/>
            <WishCard name="Logitech G Pro X Superlight" description="Trådløs computermus" img-url="https://www.pricerunner.dk/product/1200x630/3000748289/Logitech-G-Pro-X-Superlight.jpg"/>
            <WishCard name="Logitech G305 Lightspeed" description="Trådløs computermus" img-url="https://www.pricerunner.dk/product/640x640/3000333673/Logitech-G305-Lightspeed.jpg"/>
            <WishCard name="Nike Air Zoom Pegasus str 46" description="Løbesko" img-url="https://img01.ztat.net/article/spp-media-p1/d2631ea56db44fa4b39716f5b523dfe8/46e8dfb4da3e4925a08859b992f8c712.jpg?imwidth=762"/>
            <WishCard name="Nike Revolution 6 M str 46" description="Løbesko" img-url="https://www.pricerunner.dk/product/640x640/3006174346/Nike-Revolution-6-M-Black-White.jpg"/>
            <WishCard name="Cyperpunk 2077 Steam" description="Computerspil" img-url="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png"/>
            <WishCard name="World of Warcraft Dragonflight Base edition" description="Computerspil" img-url="https://sm.ign.com/ign_fr/cover/w/world-of-w/world-of-warcraft-dragonflight_a85y.jpg"/>
        </div>
    </div>
</section>
    </div>
</template>