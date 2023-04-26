import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
     image: {
        type: String,
        required: true,
      },
      categories: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Category',
        },
      ],
  });  

const Product = models.Product || model('Product', productSchema)

export default Product;