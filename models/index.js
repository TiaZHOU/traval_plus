require('dotenv').config()
const mongoose = require("mongoose");

// Connect to MongoDB
CONNECTION_STRING = 'mongodb+srv://Angelina:<password>@cluster0-0fcxl.mongodb.net/info30005?retryWrites=true&w=majority';
MONGO_URL = CONNECTION_STRING.replace("<password>", process.env.MONGO_PASSWORD);

console.log(MONGO_URL);

mongoose.connect(MONGO_URL || "mongodb://localhost/info30005", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "info30005"
});

const db = mongoose.connection;

db.on("error", err => {
    console.error(err);
    process.exit(1);
});

db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" + db.port);
});

require("./task");