import cors from "cors";
import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorhandeler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
const app: Application = express();
//const port = 3000;

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"] }));

//application routes
app.use("/api/v1", router);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", getAController);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;

// import cors from "cors";
// import express, { Application, Request, Response } from "express";
// import { StudentRoutes } from "./app/modules/student/student.routes";

// const app: Application = express();

// //parsers
// app.use(express.json());
// app.use(cors());

// // application routes
// app.use("/api/v1/students", StudentRoutes);

// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get("/", getAController);

// export default app;
