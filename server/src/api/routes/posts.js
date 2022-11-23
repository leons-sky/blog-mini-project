import { Router } from "express";
import { Post } from "../../db/models";

const postsRouter = Router();

postsRouter.get("/", async (req, res) => {
    res.send(await Post.findAll())
})

export default postsRouter;
