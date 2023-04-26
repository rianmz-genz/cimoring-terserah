
import ProductCategory from "@/models/ProductCategoryModel";
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
connectMongo();
export default async function updateProductCategory(req, res){
    const {
        query: { id },
        method,
      } = req;
      switch (method) {
        case "PUT":
          try {
            const productCategory = await ProductCategory.findByIdAndUpdate(
              id,
              req.body,
              { new: true, runValidators: true }
            );
    
            if (!productCategory) {
              return res.status(400).json({ success: false });
            }
    
            res.status(200).json({ success: true, data: productCategory });
          } catch (error) {
            res.status(400).json({ success: false });
          }
          break;
    
        default:
          res.status(400).json({ success: false });
          break;
      }
}