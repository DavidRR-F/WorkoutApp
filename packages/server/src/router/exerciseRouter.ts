import { z } from "zod";
import { prisma } from "../lib/prisma";
import { trpc } from "../lib/trpc";

export const exerciseRouter = trpc.router({
    all: trpc.procedure.input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
        return prisma.exercise.findMany({ where: { workoutId: input.id } })
    }),
    byId: trpc.procedure.input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
        return prisma.exercise.findUnique({ where: { id: input.id } })
    }),
    create: trpc.procedure
    .input(z.object(
            { 
                workoutId: z.number(), 
                name: z.string(),
                sets: z.number(),
                reps: z.number(),
                weight: z.number(),
                repRangeBottom: z.number(),
                repRangeTop: z.number(),
                weightIncrease: z.number(),
            }
        ))
    .mutation(({ ctx, input }) => {
        return prisma.exercise.create({ data: input });
    }),
    update: trpc.procedure
    .input(z.object(
            { 
                id: z.number(), 
                name: z.string(),
                sets: z.number(),
                reps: z.number(),
                weight: z.number(),
                repRangeBottom: z.number(),
                repRangeTop: z.number(),
                weightIncrease: z.number(),
            }
        ))
    .mutation(({ ctx, input }) => {
        return prisma.exercise.update(
            { 
                where: { id: input.id }, 
                data: { 
                    name: input.name,
                    sets: input.sets,
                    reps: input.reps,
                    weight: input.weight,
                    repRangeBottom: input.repRangeBottom,
                    repRangeTop: input.repRangeTop,
                    weightIncrease: input.weightIncrease, 
                } 
            });
    }),
    delete: trpc.procedure
    .input(z.number()).mutation(({ ctx, input }) => {
        return prisma.exercise.delete({ where: { id: input } });
    })
});