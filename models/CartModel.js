import { Schema, model, models } from 'mongoose';

const cartSchema = new Schema({
  items: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    qty: {
      type: Number,
      required: true,
      default: 1
    }
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
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Cart = models.Cart || model('Cart', cartSchema);

export default Cart;
