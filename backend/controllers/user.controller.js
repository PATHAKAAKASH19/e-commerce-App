import User from "../models/users.model.js";
import RefreshToken from "../models/refreshToken.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();

async function register(req, res) {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res
        .status(400)
        .json({ message: "user already exist go to login page" });
    }

    // hashing the password by bcrupt
    const hashPassword = await bcrypt.hash(password, 10);

    // storing the hashed password in database
    const createUser = await User.create({
      email,
      password: hashPassword,
    });

    return res.status(200).json({ message: "user register successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal error" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const userExist = await User.findone({ email: email });

    if (!userExist) {
      return res.status(400).json({ message: "please signup first" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExist.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "invalid password" });
    }

    const isRefreshTokenExist = await RefreshToken.findOne({
      user: userExist._id,
    });

    // check for refresh token to avoid multiple login by same user

    if (!isRefreshTokenExist) {
      // generate a access token
      const accessToken = jwt.sign(
        { userId: userExist._id, role: userExist.role },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );

      // generate a refresh token
      const refreshToken = jwt.sign(
        { userId: userExist._id, role: userExist.role },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
      );

      // storing the refresh token in the database
      await RefreshToken.create({
        refreshToken,
        user: userExist._id,
      });

      res.status(200).json({ accessToken: accessToken });

      // sending the refresh token in httpOnly cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
    }

    return res.status(200).json({ message: "user already login" });
  } catch (error) {
   return res.status(500).json({ message: "internal server error", err: error });
  }
}

async function generateAccessToken(req, res) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken)
    return res
      .status(403)
      .json({ message: "refresh token not found please login" });

  try {
    const refreshToken = await RefreshToken.findOne({
      refreshToken: refreshToken,
    });
    if (!refreshToken)
      return res.status(403).json({ message: "invalid token" });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ messgae: "invalid token" });
      }

      // generate a new access token
      const newAccessToken = jwt.sign(
        { userId: user.userId, role: user.role },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "15m" }
      );

      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
}

async function deleteAccount(req, res) {
  const refreshToken = req.cookies.refreshToken;
  try {
    const deleteUserAccount = await User.findByIdAndDelete(refreshToken.userId);
    const deleteRefreshTokenFromDatabase = await RefreshToken.findOneAndDelete({
      refreshToken,
    });
    res.clearCookie("refreshToken");

    res.status(200).json({ messgae: "account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
}

async function singOut(params) {
  const refreshToken = req.cookies.refreshToken;
  try {
    const deleteRefreshTokenFromDatabase = await RefreshToken.findOneAndDelete({
      refreshToken,
    });
    res.clearCookie("refreshToken");

    return res.status(200).json({ messgae: "logout successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
}

export { register, login, generateAccessToken, deleteAccount, singOut };
