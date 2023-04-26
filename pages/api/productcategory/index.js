
import ProductCategory from "@/models/ProductCategoryModel";
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function getAllProductCategory(req, res){
    try {
        await connectMongo();
        const productCategories = await ProductCategory.find()
        res.json({success: true, data: productCategories});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
      }
}