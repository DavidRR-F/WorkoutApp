import { trpc } from "../lib/trpc";
import { exerciseRouter } from "./exerciseRouter";
import { userRouter } from "./userRouter";
import { workoutRouter } from "./workoutRouter";


export const appRouter = trpc.router({
    user: userRouter,
    workout: workoutRouter,
    exercise: exerciseRouter
});

export type AppRouter = typeof appRouter;