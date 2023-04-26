
import Product from "@/models/ProductModel";
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function deleteProducts(req, res){
    await connectMongo()
    try {
        const deletedProduct = await Product.deleteOne({
            _id: req.query.id
        });
        res.status(200).json({success: true, data: deletedProduct});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}