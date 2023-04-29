import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: String,
    phonenumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    cart:{
        type: Schema.Types.ObjectId,
        ref: 'Cart',
      },
}) 

const User = models.User || model('User', userSchema)

export default User;