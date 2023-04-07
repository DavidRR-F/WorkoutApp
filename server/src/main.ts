import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import express from 'express';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
//app.use(express.urlencoded({ extends: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//template
//app.get("/", async (req, res, next) => {});

app.get("/user/:userId/workouts", async (req, res, next) => {
    try {
        const userWithWorkouts = await prisma.user.findUnique({
            where: { userId: Number(req.params.userId) },
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
          res.json({ userWithWorkouts })
    } catch (error: any) {
        next(error.message);
    }
});