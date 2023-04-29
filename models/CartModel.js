import { Schema, model, models } from "mongoose";

const cartSchema = new Schema({
    items: [{
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        qty: {
          type: Number,
          required: true,
          default: 1
        },
      }],
      totalQty: {
        type: Number,
        required: true,
        default: 0
    },
      totalRp: {
        type: Number,
        required: true,
        default: 0
    }
}) 

const Cart = models.Cart || model('Cart', cartSchema)

export default Cart;