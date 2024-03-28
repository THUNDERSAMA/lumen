import mongoose from 'mongoose';
import neo4j from "neo4j-driver";

async function connectToDatabase(uri: string): Promise<void> {
    console.log("Called");
  try {
    await mongoose.connect(uri, {
        autoIndex:true,
    });
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.error('Error connecting to MongoDB database:', error);
    throw error;
  }
}


// async function connectToNeo4j(uri: string): Promise<void> {
//     const URI = "neo4j+s://78208b1f.databases.neo4j.io";
//     const USER = "neo4j";
//     const PASSWORD = "7Ip5WHgdheXTisuYy9VB959wyzzbXzYkuTjCbQWviN8";
//     let driver;
  
//     try {
//       driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
//       const serverInfo = await driver.getServerInfo();
//       console.log("Connection estabilished");
//       console.log(serverInfo);
//     } catch (err) {
//       console.log(`Connection error\n${err}\nCause: ${err.cause}`);
//       await driver.close()
//       return;
//     }
  
//     // Use the driver to run queries
  
//     await driver.close();
// }

async function connectToNeo4j(uri: string): Promise<void> {
    // const URI = "neo4j+s://78208b1f.databases.neo4j.io";
    let URI: string = process.env.NEO4J_URI as string;
    const USER = "neo4j";
    const PASSWORD = "7Ip5WHgdheXTisuYy9VB959wyzzbXzYkuTjCbQWviN8";
    let driver = null; // Initialize with null
  
    try {
        driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
        const serverInfo = await driver.getServerInfo();
        console.log("Connection established with neo4j");
        console.log(serverInfo);
    } catch (err: unknown) { // Explicitly type err as unknown
        console.log(`Connection error\n${err}\nCause: ${(err as Error).cause}`);
        if (driver) { // Check if driver is not null before trying to close it
            await driver.close();
        }
        return;
    }
  
    // Use the driver to run queries
  
    if (driver) { // Check if driver is not null before trying to close it
        await driver.close();
    }
}


export default connectToDatabase;