import User from "@/models/UserModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function createUser(req, res){
    try {
        await connectMongo()
        const user = await User.create(req.body)
        console.log("succes")
        res.status(201).json({user})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
}