import { trpc } from "../lib/trpc";
import { exerciseRouter } from "./exerciseRouter";
import { userRouter } from "./userRouter";
import { workoutRouter } from "./workoutRouter";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";


export const appRouter = trpc.router({
    user: userRouter,
    workout: workoutRouter,
    exercise: exerciseRouter
});

export type AppRouter = typeof appRouter;

export type RouterInputs = inferRouterInputs<AppRouter>;

export type RouterOutputs = inferRouterOutputs<AppRouter>;