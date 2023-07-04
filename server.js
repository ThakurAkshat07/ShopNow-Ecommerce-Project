import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path"; // required to deploy our application
import { fileURLToPath } from "url";
//CONFIG ENV:
dotenv.config();

//DATABASE CONFIG:
connectDB();
//REST OBJECT:
const app = express();

//es-module fix:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//MIDDLEWARES:
//cors is a npm package used to find the cross-origin errors while concurrently running two apps.
app.use(cors());
// is used in place of body-parser
// parses incoming request with json payloads and is based on body-parser.
app.use(express.json());

// 'dev' option of morgan package is used to derive a concise colored response against
// a request.
// its tells as-> :method:url:status:response-time ms - : res[content-length]
app.use(morgan("dev"));
//deployment:
app.use(express.static(path.join(__dirname, "./client/build")));

// ROUTES:
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
//REST API:
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ShopNow App</h1>");
// });
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// PORT which listens to the server:
const PORT = process.env.PORT || 8080;

// listen the app on the port:

app.listen(PORT, (req, res) => {
  // console.log(
  //   `Server is running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white
  // );
});
