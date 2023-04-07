import "dotenv/config";
import express from 'express';
import { prisma } from "./lib/prisma";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./router";
import cors from 'cors';

const app = express();
app.use(cors())
//app.use(express.json());
//app.use(express.urlencoded({ extends: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//template
//app.get("/", async (req, res, next) => {});
app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter
}))
// app.get("/user/:userId/workouts", async (req, res, next) => {
//     try {
//         const userWithWorkouts = await prisma.user.findUnique({
//             where: { userId: Number(req.params.userId) },
//             select: {
//               userFirstName: true,
//               userLastName: true,
//               userEmail: true,
//               workouts: {
//                 select: {
//                   workoutName: true,
//                   exercises: {
//                     select: {
//                       exerciseName: true,
//                       sets: {
//                         select: {
//                           setId: true,
//                           sets: true,
//                           reps: true,
//                           weight: true,
//                         },
//                       },
//                       overloadStrategy: {
//                         select: {
//                           overLoadId: true,
//                           repRangeBottom: true,
//                           repRangeTop: true,
//                           weightIncrease: true,
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           });
//           res.json({ userWithWorkouts })
//     } catch (error: any) {
//         next(error.message);
//     }
// });