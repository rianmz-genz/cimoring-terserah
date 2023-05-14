
import Product from "@/models/ProductModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function findOneProduct(req, res){
    try {
        await connectMongo()
        const product = await Product.aggregate([
            {
                $match: {
                    path: req.query.path
                }
            },
            {
              $lookup: {
                from: "productcategories",
                localField: "categories",
                foreignField: "_id",
                as: "productCategories"
              }
            },
            {
                $limit: 1
            }
          ]).exec();
        const result = product.length > 0 ? product[0] : null;
        res.status(200).json({success: true, data: result})
    } catch (error) {
        console.log(error)
        res.status(400).json({success: false, error})
    }
}