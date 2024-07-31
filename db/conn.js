import { MongoClient } from "mongodb";

const connectionString = process.env.NODE_ENV === "production" ? process.env.MONGO_URI : "mongodb://localhost:27017";

const client = new MongoClient(connectionString);

let conn;

try {
    conn = await client.connect();
} catch (err) {
    console.error(err);
}

let db = conn.db("portfolio");

export default db;