import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI;
console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;

try {
    conn = await client.connect();
} catch (err) {
    console.error(err);
}

if(process.env.NODE_ENV === "development") {
    conn.db("portfolio").createCollection("portfolio");
    conn.db("portfolio").createCollection("users");
}

let db = conn.db("portfolio");

export default db;