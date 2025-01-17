import { Router } from "express";
import userController from "./controller.js";

const router = Router();

router.post("/", (req, res) => {
  userController
    .create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    // separate error handling for validation errors (400 from 500  errors)
    .catch((err) => {
      if (
        err.message.includes("notNull Violation") ||
        err.message.includes("Validation error")
      ) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(500).json({ error: err.message });
      }
    });
});

router.post("/login", async (req, res) => {
  const foundUser = await userController.show(req.body);

  const isAuth = await foundUser?.isValidPassword(req.body.password);

  if (!isAuth) {
    res.status(401).json({ error: "Invalid credentials" });
  }

  res.status(200).json(foundUser);
});

//   userController
//     .login(req.body)
//     .then((user) => {
//       res.status(200).json(user);
//     })
//     .catch((err) => {
//       res.status(401).json({ error: err.message });
//     });
// });

export default router;
