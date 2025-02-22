import mongoose from "mongoose";
const uri =
  "mongodb+srv://devluanpessoa:dDZHW3Yphv0Bz8ol@projects.bvlus.mongodb.net/?appName=Projects";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
  dbName: "alura-node",
};

mongoose.connect(uri, clientOptions);

export default mongoose.connection;
