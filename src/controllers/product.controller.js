import Product from "../models/Product";

// Create Product
export const createProduct = async (req, res) => {
  const { name, category, status, miniumStock, price } = req.body;
  try {
    const newProduct = new Product({
      name,
      category,
      status,
      miniumStock,
      price,
    });

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// View Products
export const getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// View Products By Id
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200), json(Product);
};

// Update Product by Id
export const updateProductById = async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  re.status(200).json(updateProduct);
};

// Delete Product By Id
export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);

  // code 200 is ok too
  res.status(204).json();
};
