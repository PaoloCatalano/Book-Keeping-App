import { Unauthenticated } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Unauthenticated("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    //test user
    const testUser = payload.userId === "636d1ee7e0d18707802f469a";
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new Unauthenticated("Authentication Invalid");
  }
};

export default auth;
