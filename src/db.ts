import { connect } from "mongoose";

connect(process.env.DB_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log("db is connected"))
  .catch((err) => console.error(err));
