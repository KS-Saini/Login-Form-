const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/loginformdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection Successful...")).
    catch((err) => console.log("Connection Closed due to Errs", err));