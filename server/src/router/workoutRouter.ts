import { prisma } from "../lib/prisma";
import { trpc } from "../lib/trpc";
import { z } from "zod";


export const workoutRouter = trpc.router({
    test: trpc.procedure.query(() => {
        return prisma.user.findUnique({
            where: { userId: 1 },
            select: {
                userFirstName: true,
                userLastName: true,
                userEmail: true
            }
        })
    }),
    workouts: trpc.procedure.input(z.object({userId: z.number()}))
    .mutation(({ input }) => {
        const userId = input.userId;
        return prisma.user.findUnique({
            where: { userId: userId },
            select: {
                userFirstName: true,
                userLastName: true,
                userEmail: true,
                workouts: {
                select: {
                    workoutName: true,
                    exercises: {
                    select: {
                        exerciseName: true,
                        sets: {
                        select: {
                            setId: true,
                            sets: true,
                            reps: true,
                            weight: true,
                        },
                        },
                        overloadStrategy: {
                        select: {
                            overLoadId: true,
                            repRangeBottom: true,
                            repRangeTop: true,
                            weightIncrease: true,
                        },
                        },
                    },
                    },
                },
                },
            },
        });
    })
});