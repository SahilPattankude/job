import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js";
import jobRoute from "./routes/jobRoute.js";
import applicationRoute from "./routes/applicationRoute.js";
import path from "path"

dotenv.config({});
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

 
//api's

app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);


//code for deployment

if (process.env.NODE_ENV === "production") {
  const dirpath = path.resolve();
  app.use(express.static('./client/dist'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirpath, './client/dist' , 'index.html'));
  });
  
}

app.get("/", (req, res) => {
    res.send("Welcome to Job Portal API");
    });

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});