import express, { Response } from "express";
import { UserRequest, addMsgToRequest } from "./server";
const router = express.Router();

router.use("/read/usernames", addMsgToRequest);

router.get("/read/usernames", (req: UserRequest, res: Response) => {
    let usernames = req.users?.map((user) => {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

router.use("/read/username", addMsgToRequest);
router.get("/read/username/:name", (req: UserRequest, res: Response) => {
    let username = req.params.name;
    let user = req.users?.find((user) => user.username === username);
    if (user) {
        res.send(user);
    } else {
        res.json({
            error: { message: "User not found", status: 404 },
        });
    }
});

export default router;
