import mongoose from "mongoose";

export class MongoDBConnection {
  private static instance: MongoDBConnection;
  private constructor() {}

  public static getInstance(): MongoDBConnection {
    if (!MongoDBConnection.instance) {
      MongoDBConnection.instance = new MongoDBConnection();
    }
    return MongoDBConnection.instance;
  }

  public async connect(uri: string): Promise<void> {
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB Atlas");
    } catch (error) {
      console.log("Error connecting to MongoDB Atlas", error);
    }
  }
  public async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from Mongo Db Atlas");
    } catch (error) {
      console.error("Error disconnecting from MongoDb Atlas");
    }
  }
  public getConnection(): typeof mongoose {
    return mongoose;
  }
}
