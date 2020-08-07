import * as dotenv from "dotenv";
// env variables
dotenv.config();

import app from "./app";
import "./db";

const start = () => {
  try {
    app.listen(app.get("port"));
    console.log(`server on port ${app.get("port")}`);
  } catch (error) {
    console.error(error);
  }
};

start();
