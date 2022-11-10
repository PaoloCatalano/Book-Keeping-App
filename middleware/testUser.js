import { BadRequest } from "../errors/index.js";

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequest("Test User is Read-Only");
  }
  next();
};

export default testUser;
