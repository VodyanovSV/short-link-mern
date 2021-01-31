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

    async login(candidate) {
        try {
            const {email, password} = candidate
            const userInDB = await User.findOne({email: email})
            if (!userInDB) {
                return {isEnter: false}
            }

            const isMatch = await bcrypt.compare(password, userInDB.password)
            if (!isMatch) {
                return {isEnter: false}
            }

            const token = jwt.sign(
                {userID: userInDB.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            return {
                isEnter: true,
                token,
                id: userInDB.id
            }

        } catch (e) {
            return {isEnter: false}
        }
    }
}

export default new AuthServises()