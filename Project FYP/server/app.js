import express from "express";
import myroute from "./routes/adminRoutes.js";

const app = express();

app.use("/", myroute);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
