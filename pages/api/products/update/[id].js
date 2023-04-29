
import Product from "@/models/ProductModel";
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
connectMongo();
export default async function updateProduct(req, res){
    const {
        query: { id },
        method,
      } = req;
      switch (method) {
        case "PUT":
          try {
            const product = await Product.findByIdAndUpdate(
              id,
              req.body,
              { new: true, runValidators: true }
            );
    
            if (!product) {
              return res.status(400).json({ success: false, data: "Data tidak ditemukan"});
            }
    
            res.status(200).json({ success: true, data: product });
          } catch (error) {
            res.status(400).json({ success: false });
          }
          break;
    
        default:
          res.status(400).json({ success: false });
          break;
      }
}