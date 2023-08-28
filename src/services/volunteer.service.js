
import { connectionSrt } from "@/lib/db";
import mongoose from "mongoose";

export const getVolunteersFromDb = async () => {
    await mongoose.connect(connectionSrt);
    const db = mongoose.connection;
    const volunteersCollection = db.collection('volunteers');
    return volunteersCollection.find({}).toArray();
};