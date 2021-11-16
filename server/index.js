const express = require("express");
const cors = require("cors");


//bringing in the controller
const movieController = require("./controller/movieController");

const {
    getMovies,
    createMovie,
    deleteMovie,
    updateMovie
} = require("./controller/movieController")



const app = express();

//top level middleware
app.use(express.json());
app.use(cors());


//endpoints
app.get("/api/movies", movieController.getMovies);
app.post("/api/movies", movieController.createMovie);
app.delete("/api/movies/:id", movieController.deleteMovie);
app.put("/api/movies/:id", updateMovie)


app.listen(4004, () => console.log("Server running on port 4004"));