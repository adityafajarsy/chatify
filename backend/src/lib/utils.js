import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not found in .env file");
  }
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // prevent client-side js from accessing the cookie
    sameSite: "strict", // prevent CSRF attacks
    secure: process.env.NODE_ENV !== "development", // only send over HTTPS in production
  });

  return token;
};
