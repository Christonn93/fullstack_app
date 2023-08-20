const express = require("express");
const { verifyJwt } = require("./auth/checkAuth");

const usersRoutes = require("./src/users/routes");

const app = express();
const port = process.env.PORT || 5000 ;

app.use(express.json());

app.get("/api/v1/", (req, res) => {
 res.status(200).send("Api is responding with connected");
 res.status(201).send("Api is responding with success");
 res.status(404).send("Api is responding with fault 404");
});

// ---- Routes for system ---- //

// Routes for user data
app.use("/api/v1/users/", usersRoutes);

app.listen(port, () => console.log(`app listening to port ${port}`));
