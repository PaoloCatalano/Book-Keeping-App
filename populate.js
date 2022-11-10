import { readFile } from "fs/promises";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    const jsonJobs = JSON.parse(
      await readFile(new URL("./MockData.json", import.meta.url))
    );
    await Job.create(jsonJobs);
    console.log("_______json to jobs!!!!!!!!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start(); //> node <<FILE NAME_senza estensione>>
