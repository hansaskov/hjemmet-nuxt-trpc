import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

    const users: Prisma.UserCreateInput[] = [

        {
            firstName: "Jan",
            lastName: "Askov",
            birthDate: new Date(0 * 1000),
            email: "jan@askov.dk",
            description: "Varm farman 🤗",
            imageUrl: "https://media-exp1.licdn.com/dms/image/C5103AQFsm8dObJdzbg/profile-displayphoto-shrink_800_800/0/1516236198177?e=1671667200&v=beta&t=q3jTV1CQ4u6Ceg927LEgsU6INvRbH2e6di_MF98pc0o"

        },
        {
            firstName: "Mette",
            lastName: "Askov",
            birthDate: new Date(0 * 1000),
            email: "mette@askov.dk",
            description: "Familie boss 🤠",
            imageUrl: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4EAL1NO1P3IAX9Vf1Zj&_nc_ht=scontent-cph2-1.xx&oh=00_AT8KuAkU-Fm3CqVjk5VozvGgeOnPfJQ2-Tu6tkyg2Pncjg&oe=637094F8"

        },
        {
            firstName: "Emma",
            lastName: "Askov",
            birthDate: new Date(881632800 * 1000),
            email: "emma@askov.dk",
            description: "Stand up komiker 🤣😐 (den sjove)",
            imageUrl: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/83091685_10216375571922765_8334517091679862784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C1IWGzExt0cAX-3_7oK&tn=0X9lGtmo8TX18ext&_nc_ht=scontent-cph2-1.xx&oh=00_AT_TvbuGM53mpzPLnQKSLM8nnXO9WNb4mN3i_EzYWr4q-Q&oe=63714A84"

        },
        {
            firstName: "Oskar",
            lastName: "Askov",
            birthDate: new Date(940986000 * 1000),
            email: "oskar@askov.dk",
            description: "Mors eftergænger 🧑‍⚖️‍📝",
            imageUrl: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/108064483_3246791598718473_3304436513891469090_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zGMdiGA9OEEAX85i3aq&_nc_ht=scontent-cph2-1.xx&oh=00_AT-fM0NKHe6lGpVLWwAHSD8BVvD-yHE943B5ZDRbdnsanQ&oe=63732C1F"

        },
        {
            firstName: "Hans",
            lastName: "Askov",
            birthDate: new Date(940986000 * 1000),
            email: "hans@askov.dk",
            description: "Fars dreng 🤓💻🤖",
            imageUrl: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/53472633_2272635566132355_4004951239950336000_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2weyqGFX0gEAX_d2Ppg&tn=0X9lGtmo8TX18ext&_nc_ht=scontent-cph2-1.xx&oh=00_AT8tAjWN_s-ef9ggSz5iIQsLn647-tWwiYM4gzwc4jCOZQ&oe=6371B67A"

        },
        {
            firstName: "Aske",
            lastName: "Askov",
            birthDate: new Date(940986000 * 1000),
            email: "aske@askov.dk",
            description: "Artist og gamer 👨‍🎨🎮",
            imageUrl: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/294592439_1400730257101705_8415888199252941538_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ydhA8f-_67kAX_Aq5O-&tn=0X9lGtmo8TX18ext&_nc_ht=scontent-cph2-1.xx&oh=00_AT9yol0ABJFNTGi7AcK4cc1WTkJWsxn0S0Fh3DB1eLhkHg&oe=635184A7"

        }
    ]

    for (const user of users) {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user
        })
    }

    const hansWishes: Prisma.WishCreateInput[] =[
        {
            name: "Nike Air Zoom Pegasus str 46",
            user: { connect: {email: "hans@askov.dk"} },
            description: "Løbesko",
            imageUrl: "https://img01.ztat.net/article/spp-media-p1/d2631ea56db44fa4b39716f5b523dfe8/46e8dfb4da3e4925a08859b992f8c712.jpg?imwidth=762"
        },
        {
            name: "M- wave skaterhjelm, blank hvid",
            user: { connect: {email: "hans@askov.dk"} },
            description: "Cykelhjelm",
            imageUrl: "https://ecykelhjelm.dk/4846-large_default/m-wave-skaterhjelm-blank-hvid-billigste.jpg"
        },
        {
            name: "Nike Revolution 6 M str 46",
            user: { connect: {email: "hans@askov.dk"} },
            description: "Løbesko",
            imageUrl: "https://www.pricerunner.dk/product/640x640/3006174346/Nike-Revolution-6-M-Black-White.jpg"
        },
        {
            name: "Cyperpunk 2077 Steam",
            user: { connect: {email: "hans@askov.dk"} },
            description: "Computerspil",
            imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png"
        },
        {
            name: "World of Warcraft Dragonflight Base edition",
            user: { connect: {email: "hans@askov.dk"} },
            description: "Computerspil",
            imageUrl: "https://sm.ign.com/ign_fr/cover/w/world-of-w/world-of-warcraft-dragonflight_a85y.jpg"
        }
    ] 

    for (const wish of hansWishes) {
        await prisma.wish.create({data: wish})
    }


}
main()

    .then(async () => {

        await prisma.$disconnect()

    })

    .catch(async (e) => {

        console.error(e)

        await prisma.$disconnect()

        process.exit(1)

    })