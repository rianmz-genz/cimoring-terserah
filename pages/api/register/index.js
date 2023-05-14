import User from "@/models/UserModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const jwt = require('jsonwebtoken');

export default async function createUser(req, res){
    try {
        await connectMongo()
        const user = await User.create(req.body)
        const token = jwt.sign({ role: user.role }, process.env.JWT_SECRET); // generate token with secret key
        user.token = token; // set token field in user document
        await user.save(); // save user document to database
        console.log("succes")
        res.status(201).json({success: true, data: user})
    } catch (error) {
        console.log(error)
        res.status(200).json({success: false, message: "Email sudah didaftarkan.", status: "400"})
    }
}