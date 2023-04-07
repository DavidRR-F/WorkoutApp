# Mobile Workout App

I decided to build a Workout Mobile Application with I new stack of frameworks I have not used to easy see new technologies have are enabling increased development productivity. I have never used any of these frameworks or developed a mobile application, so I will be depending entirely on my skills in typescript, restful api development, and relational databases. After the development is complete for this project, I will write about these frameworks and how there compare to other frameworks I have experience with.

***Slaps Stack: This baby can fit so much typescript in it!***

Note: I am also building this because I'm stuborn and refuse $20 a month for an app to track my workouts :sweat_smile:

## Core Concept

Create a Mobile Application that allows users to create workouts and with progressive overload functionality. When the user completes a workout full, increase the number of reps and/or weight used in the exercise specified by the user

## Stack 
- React Native (Maybe Expo)
- Tailwind CSS
- tRPC
- Prisma
- PlanetScale

# Step 1. Sketch Application Design

## Frontend Scetch

### Create Workout Flow

![image](https://user-images.githubusercontent.com/99210748/230599079-69d7a652-bc36-41cc-8627-3979b320b53d.png)

### View Workout Flow (Overload All Functionality)

![image](https://user-images.githubusercontent.com/99210748/230600559-7c9ccf71-99ac-44dd-a9d1-a2e9dd0a8326.png)

### View Exercise (Overload Exercise Functionality)

![image](https://user-images.githubusercontent.com/99210748/230602405-1d77b64b-2637-4003-9b27-0856be0b95c5.png)

### Edit Workout/Exercise Flow

![image](https://user-images.githubusercontent.com/99210748/230603445-f6905532-421e-47ff-846b-a2a14359cbfa.png)

### Delete Workout/Exercise Flow (Hold in Card Element to Trigger Delete Modals)

![image](https://user-images.githubusercontent.com/99210748/230606753-fd2368fe-6af8-4a28-864a-a3455d629105.png)

## Backend Scetch

### Endpoints



### Database Structure

#### User Info

User Table

| UserId        | UserFirstName   | UserLastName  | UserEmail               |
| :------------ |:----------------|:--------------|:------------------------|
| 1             | David           | Rose-Franklin |   davidIsBest@david.com |
| 2             | John            |   Doe         |   doeyBoi@david.com     |

Workout Table (1-to-Many with User)

| UserId | WorkoutId     | WorkoutName     |
|:-------| :------------ |:----------------|
| 1      | 1             | Leg Day         |
| 1      | 2             | Pull Day        |

Exercise Table (1-to-Many with Workout)

| WokroutId     | ExerciseId | ExerciseName  |
| :------------ |:-----------|:--------------|
| 1             | 1          | Deadlift      |
| 1             | 1          | Split Squats  |

#### Progressive Overload Info

Set Table (1-to-1 With Exercise)

| ExerciseId    | SetId   | Sets  | Reps | Weight |
| :------------ |:--------|:------|:-----|:-------|
| 1             | 1       | 3     | 10   | 180    |
| 2             | 2       | 4     | 12   | 0      |

Overload Strategy Table (1-to-1 with Set)

- If Reps == RepRangeTop then Weight += WeightIncrease else Reps += 2 

| ExerciseId    | OverLoadId   | RepRangeBottom | RepRangeTop | WeightIncrease |
| :------------ |:-------------|:---------------|:------------|:---------------|
| 1             | 1            | 8              | 12          | 5              |
| 2             | 2            | 10             | 20          | 5              |
