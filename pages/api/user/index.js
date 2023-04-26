import User from "@/models/UserModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function getUsers(req, res){
    try {
        await connectMongo()
        const user = await User.find()
        console.log("succes")
        res.status(200).json({success: true, data: user})
    } catch (error) {
        console.log(error)
        res.status(404).json({success: false, error})
    }
}