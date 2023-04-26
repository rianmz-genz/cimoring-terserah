
import ProductCategory from "@/models/ProductCategoryModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */


export default async function createProductCategory(req, res){
    try {
        await connectMongo()
        const productCategory = await ProductCategory.create(req.body)
        console.log("succes")
        res.status(201).json({productCategory})
    } catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
}