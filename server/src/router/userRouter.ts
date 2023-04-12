import { prisma } from "../lib/prisma";
import { trpc } from "../lib/trpc";


export const userRouter = trpc.router({
    test: trpc.procedure.query(() => {
        return prisma.user.findUnique({
            where: { id: 1 }
        })
    })
});