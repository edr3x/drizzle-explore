import express from "express";
import cors from "cors";

import config from "./config/env";

import { router } from "./routes";
import { notFound, customErrorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/v1", router);
app.use(customErrorHandler);
app.use(notFound);

const port = config.PORT;
app.listen(port, () => console.log(`listening in port:${port}`));
