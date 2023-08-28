const {DB_USER, DB_PASSWORD} =process.env;

export const connectionSrt = "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@cluster0.5nuw1j2.mongodb.net/donationDB?retryWrites=true&w=majority";