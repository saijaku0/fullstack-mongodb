import { body } from "express-validator";

export const registerationValidation = [
  body("email", "Invalid email format").isEmail(),
  body(
    "password",
    "Invalid password, password length is less 5 symbols"
  ).isLength({ min: 5 }),
  body("fullName", "Invalid full name format").isLength({ min: 3 }),
  body("avatarUrl", "Set the avatar url").optional().isURL(),
];

export const loginValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password can`t be less 5 symbols").isLength({
    min: 5,
  }),
];

export const feedCreateValidation = [
  body("title", "Enter feed title").isLength({ min: 3 }).isString(),
  body("text", "Please enter feed text").isLength({ min: 3 }).isString(),
  body("tags", "Invalid tags format").optional().isString(),
  body("imageUrl", "Invalid image url").optional().isString(),
];
