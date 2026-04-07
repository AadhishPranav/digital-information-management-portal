const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("./db");
require("dotenv").config();
const schemeRoutes = require("./routes/schemes");
const policyRoutes = require("./routes/policies");
const regulationRoutes = require("./routes/regulations");
const higherStudyRoutes = require("./routes/higherstudies");
const scholarshipRoutes = require("./routes/scholarships");
const newsRoutes = require("./routes/news");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/schemes", schemeRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/regulations", regulationRoutes);
app.use("/api/higherstudies", higherStudyRoutes);
app.use("/api/scholarships", scholarshipRoutes);
app.use("/api/news", newsRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});