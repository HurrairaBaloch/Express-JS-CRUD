import express from "express";
import connectMongo from "./db.js";
import { join } from "path";
import web from "./Routes/web.js";

const app = express();
connectMongo();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(process.cwd(), "public")));
app.set("view engine", "ejs");

app.use("/student", web);
app.use("/student/edit", web);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running");
});
