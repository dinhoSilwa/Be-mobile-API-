import app from "./app";
import { configDotenv } from "dotenv";
import { MongoDBConnection } from "./utils/mongoDB/db";
import { PORT, uriDB } from "./utils/mongoDB/client";
configDotenv();

const StartServer = async () => {
  try {
    const db = MongoDBConnection.getInstance();
    await db.connect(uriDB as string);
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting Server", error);
    process.exit(1);
  }
};
StartServer();
