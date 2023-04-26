import ProductCategory from "@/models/ProductCategoryModel";
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function deleteCategory(req, res){
    await connectMongo()
    try {
        const deletedProductCategory = await ProductCategory.deleteOne({
            _id: req.query.id
        });
        res.status(200).json({success: true, data: deletedProductCategory});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}