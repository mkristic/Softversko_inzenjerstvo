const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "client")));

const dbPath = "./db";

const openDbConnection = async () => {
    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    });

    // db.on("trace", (query) => {
    //     console.log(query);
    // })

    return db;
} 

// home page
app.get("/", (req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "client")});
});






app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
