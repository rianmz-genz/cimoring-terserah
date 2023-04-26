import User from "@/models/UserModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
connectMongo();
export default async function updateUser(req, res){
    const {
        query: { id },
        method,
      } = req;
      switch (method) {
        case "PUT":
          try {
            const user = await User.findByIdAndUpdate(
              id,
              req.body,
              { new: true, runValidators: true }
            );
    
            if (!user) {
              return res.status(400).json({ success: false });
            }
    
            res.status(200).json({ success: true, data: user });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false });
          break;
      }
}