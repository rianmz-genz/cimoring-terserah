import { Schema, model, models } from "mongoose";
const categorySchema = new Schema({
    name: {
      type: String,
      required: true,
    },
  });

  const ProductCategory = models.ProductCategory || model('ProductCategory', categorySchema)

export default ProductCategory;