const mongoose = require("mongoose");

module.exports = connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.connect(
    "mongodb://root:root@localhost:27017/admin",
    {
      dbName: "nodejs",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("connected");
      }
    }
  );
  mongoose.connection.on("error", (error) => {
    console.error(error);
  });
  mongoose.connection.on("disconnected", () => {
    // console.log("disconnected");
    connect();
  });
};
