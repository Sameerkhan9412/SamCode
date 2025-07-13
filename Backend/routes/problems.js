const express=require("express")
const adminMiddleware = require("../middleware/adminMiddleware")
const ProblemRouter=express.Router()

// create
ProblemRouter.post("/create",adminMiddleware,createProblem)
ProblemRouter.get("/:id",adminMiddleware,getProblem)
ProblemRouter.get("/",adminMiddleware,getAllProblems)

ProblemRouter.patch("/:id",updateProblem)
ProblemRouter.delete("/:id",deleteProblem)
ProblemRouter.get("/user",solvedProblem)