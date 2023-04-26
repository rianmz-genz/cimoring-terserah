import User from "@/models/UserModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function findOneUser(req, res){
    try {
        await connectMongo()
        const user = await User.findById({
            _id: req.query.id
        })
        console.log("succes")
        res.status(200).json({success: true, data: user})
    } catch (error) {
        console.log(error)
        res.status(400).json({success: false, error})
    }
}