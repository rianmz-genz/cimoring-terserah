import User from "@/models/UserModel"
import connectMongo from "@/utils/connectDb"

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function getUsers(req, res){
    const {
        method,
        body: { email, password },
    } = req
    switch (method) {
        case "POST":
          try {
            const user = await User.findOne(
              {email, password}
            );
            if (!user) {
              return res.status(200).json({ success: false, message: "Email atau kata sandi salah!" });
            }
            res.status(200).json({ success: true, data: user });
          } catch (error) {
            res.status(200).json({ success: false, message: error.message });
          }
          break;
    
        default:
          res.status(400).json({ success: false, message: "not post" });
          break;
      }
}