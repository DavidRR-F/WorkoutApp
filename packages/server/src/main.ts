import "dotenv/config";
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./router";
import cors from 'cors';

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter
}))

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));