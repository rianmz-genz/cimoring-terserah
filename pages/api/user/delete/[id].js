import User from "@/models/UserModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function deleteUser(req, res){
    await connectMongo()
    try {
        const deletedUser = await User.deleteOne({
            _id: req.query.id
        });
        res.status(200).json({success: true, data: deletedUser});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}