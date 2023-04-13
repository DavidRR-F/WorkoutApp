import { prisma } from "../lib/prisma";
import { trpc } from "../lib/trpc";
import { z } from "zod";


export const workoutRouter = trpc.router({
    all: trpc.procedure.input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
        return prisma.workout.findMany({ where: { userId: input.id } })
    }),
    byId: trpc.procedure.input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
        return prisma.workout.findUnique({ where: { id: input.id } })
    }),
    create: trpc.procedure.input(z.object({ userId: z.number(), name: z.string() }))
    .mutation(({ ctx, input }) => {
        return prisma.workout.create({ data: input });
    }),
    update: trpc.procedure.input(z.object({ id: z.number(), name: z.string() }))
    .mutation(({ ctx, input }) => {
        return prisma.workout.update({ where: { id: input.id }, data: { name: input.name } });
    }),
    delete: trpc.procedure
    .input(z.number()).mutation(({ ctx, input }) => {
        return prisma.workout.delete({ where: { id: input } });
    })
});