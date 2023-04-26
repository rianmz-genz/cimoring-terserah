
import Product from "@/models/ProductModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function getAllProduct(req, res){
    try {
        await connectMongo();
        const products = await Product.aggregate([
          {
            $lookup: {
              from: "productcategories",
              localField: "categories",
              foreignField: "_id",
              as: "productCategories"
            }
          }
        ]);
        res.json({success: true, data: products});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
      }
}