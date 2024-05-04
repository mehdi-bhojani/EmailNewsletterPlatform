import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";

export const connectToAstraDb = async () => {
  try {
    const apiEndpoint = process.env.ASTRA_DB_API_ENDPOINT;
    const applicationToken = process.env.ASTRA_DB_APPLICATION_TOKEN;
    
    if (!apiEndpoint || !applicationToken) {
        throw new Error("ASTRA_DB_API_ENDPOINT is not defined.");
    }

    const uri = createAstraUri(
        apiEndpoint,
        applicationToken,
    );
    
    if (mongoose.connection.readyState) {
        await mongoose.disconnect();
    }

    mongoose.set("autoCreate", true);
    mongoose.setDriver(driver);
    
    await mongoose.connect(uri, {
        isAstra: true,
    })
    .then(() => {
        console.log("Connected to Astra DB");
    })
    .catch((err) => {
        console.error("Error connecting to Astra DB: ", err);
    });
  } catch (error) {
    console.error("Error connecting to Astra DB: ", error);   
  }
}
