


import mongoose from "mongoose";
import { connectionSrt } from "./db";

export const getVolunteersFromDb = async () => {
    await mongoose.connect(connectionSrt);
    const db = mongoose.connection;
    const volunteersCollection = db.collection('volunteerses');
    return volunteersCollection.find({}).toArray();
};


