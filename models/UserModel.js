import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: String,
    password: String,
    token: {
        type: String,
        require: true
    }
}) 

const User = models.User || model('User', userSchema)

export default User;