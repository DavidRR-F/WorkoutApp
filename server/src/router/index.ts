import { trpc } from "../lib/trpc";
import { workoutRouter } from "./workoutRouter";


export const appRouter = trpc.router({
    workout: workoutRouter
});

export type AppRouter = typeof appRouter;