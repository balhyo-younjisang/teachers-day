import express from "express"
import { postUpload, handleWatch, getEnter, postEnter, getLetterList, getUpload } from "../controllers/letterController.js";

const letterRouter = express.Router();

letterRouter.route("/").get(getEnter).post(postEnter);
letterRouter.route("/letter").get(getUpload).post(postUpload);
letterRouter.route("/:id([0-9a-f]{24})").get(handleWatch);
letterRouter.route("/list").get(getLetterList)

export default letterRouter;