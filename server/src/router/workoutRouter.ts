import { prisma } from "../lib/prisma";
import { trpc } from "../lib/trpc";
import { z } from "zod";


export const workoutRouter = trpc.router({
    test: trpc.procedure.query(() => {
        return prisma.workout.findMany({
            where: { userId: 1 }
        })
    })
});