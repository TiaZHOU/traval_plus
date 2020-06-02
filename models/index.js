require('dotenv').config()
const mongoose = require("mongoose");

// connect to MongoDB
CONNECTION_STRING = "mongodb+srv://Angelina:<password>@cluster0-nwk5j.mongodb.net/travel?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);

mongoose.connect(MONGO_URL || "mongodb://localhost/info30005", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "travel"
});
const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});
db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" + db.port);
});

// require mongoose models
require('./task');
require('./visa');
require('./immunisation');
require('./alerts');
require("./Comment");
require("./Post");
require("./User");
