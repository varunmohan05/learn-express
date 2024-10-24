import express, { Response } from "express";
import { UserRequest } from "./types";
const router = express.Router();

router.get("/usernames", (req: UserRequest, res: Response) => {
    let usernames = req.users?.map((user) => {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

router.get("/username/:name", (req: UserRequest, res: Response) => {
    let username = req.params.name;
    let user = req.users?.filter((user) => user.username === username);
    if (user) {
        res.send(user);
    } else {
        res.json({
            error: { message: "User not found", status: 404 },
        });
    }
});

export default router;
