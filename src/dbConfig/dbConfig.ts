import mongoose from "mongoose"

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection
    
    connection.on("connected", () => {
      console.log("MongoDb connected successfuly");
    })

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure Mongo DB is running" + err
      );
      process.exit();
    })
  } catch (error) {
    console.log("Somthing went wrong!")
    console.log(error)
  }
}
