
import Product from "@/models/ProductModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function createProduct(req, res){
    try {
        await connectMongo()
        const product = await Product.create(req.body)
        console.log("succes")
        res.status(201).json({product})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
}