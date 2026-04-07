import { createProduct, getProductsByUserId } from "../db/queries/products.js";

export async function createProductByUser(req, res) {
  const { user } = req;
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { articleNo, productName, inPrice, price, unit, inStock, description } =
    req.body;
  const product = await createProduct({
    userId: user.sub,
    articleNo,
    productName,
    inPrice,
    price,
    unit,
    inStock,
    description,
  });
  return res.status(201).json(product);
}

export async function getProductsByUser(req, res) {
  const { user } = req;
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const products = await getProductsByUserId(user.sub);
  return res.status(200).json(products);
}
