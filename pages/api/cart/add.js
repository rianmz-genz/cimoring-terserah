
import Cart from "@/models/CartModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function createCart(req, res){
    try {
        await connectMongo()
        const cart = await Cart.create(req.body)
        console.log(req.body)
        res.status(201).json({success: true, data: cart})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
}