import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    const user = await prisma.user.upsert({
        where: { userEmail: "davidIsBest@david.com" },
        update: {},
        create: {
            userFirstName: "David",
            userLastName: "Rose-Franklin",
            userEmail: "davidIsBest@david.com"
        }
    });

    console.log({ user });
}

run()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });