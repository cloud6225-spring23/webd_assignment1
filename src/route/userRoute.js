import { Router } from "express";
import { user_create, getAllUsersDetails } from "../service/userService.js";
import { encrypt_password } from "../middleware/encryption.js";

const router = Router();

router.post("/user", encrypt_password, async (request, response) => {
    const returned_data = await user_create(request.body);



    response.send(returned_data);
  });

router.get("/healthz", async (request, response) => {
    const returned_data = await getAllUsersDetails();
    response.send(returned_data);
  });


export { router as userRouter };






