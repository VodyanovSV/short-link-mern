import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

class AuthServises {
    async register(candidate) {
        try {
            const {email, password} = candidate
            const userInDB = await User.findOne({email: email})
            if (userInDB) {
                return false
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email: email, password: hashedPassword})
            await user.save()

            return true
        } catch (e) {
            return false
        }
    }


}

export default new AuthServises()