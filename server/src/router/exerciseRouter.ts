import { prisma } from "../lib/prisma";
import { trpc } from "../lib/trpc";

export const exerciseRouter = trpc.router({
    test: trpc.procedure.query(() => {
        return prisma.exercise.findMany({
            where: { workoutId: 1 }
        })
    })
});