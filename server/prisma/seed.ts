import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    const user = await prisma.user.upsert({
        where: { email: "davidIsBest@david.com" },
        update: {},
        create: {
            name: "David",
            email: "davidIsBest@david.com"
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