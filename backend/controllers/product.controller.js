import Product from "../models/products.model.js";
import cloudinary from "../config/clodinary.config.js";
import {
  uploadImagesToCloudinary,
  updateUploadedImagesToCloudinary,
} from "../utils/uploadMultipleImagesToClodinary.util.js";
import fs from "fs";
import mongoose from "mongoose";

// get all the products created by seller
async function getProduct(req, res) {
  try {
  
    const allProducts = await Product.find(req.query).populate("categoryId", "category trending subCategory");

    if (allProducts.length > 0) {
      return res.status(200).json(allProducts);
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "error in getting product", error });
  }
}

//  get all the products by category
async function getProductsByCategory(req, res) {
  try {
   
    let query = {};

    const { price, color, sizes, material, style } = req.query;
    const { categoryId } = req.params;

    if(!categoryId || !mongoose.Types.ObjectId.isValid(categoryId)){
      return res.status(400).json({success:false, message:"invalid ProductId"})
    }

    if (sizes) query.sizes = { $in: Array.isArray(sizes) ? sizes : [sizes] };
    if (style)
      query.styleType = { $in: Array.isArray(style) ? style : [style] };
    if (color) query.color = { $in: Array.isArray(color) ? color : [color] };
    if (price)
      query.price = {
        $lte: Math.max(
          ...(Array.isArray(price)
            ? price.map((value) => parseFloat(value))
            : [parseFloat(price)])
        ),
      };
    if (material)
      query.materialType = {
        $in: Array.isArray(material) ? material : [material],
      };

    const product = await Product.find({
      categoryId: categoryId,
      ...query,
    }).populate("categoryId", "category trending subCategory");

    if (product.length !== 0) {
      return res.status(200).json(product);
    } else {
      return res
        .status(200)
        .json({ success: false, message: "this category has no product" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in getting product by category",
      error,
    });
  }
}

//  get one product at a time
async function getProductById(req, res) {
  try {
    const {productId} = req.params;

    if(!productId || !mongoose.Types.ObjectId.isValid(productId)){
      return res.status(400).json({success:false, message:"invalid ProductId"})
    }

    const product = await Product.findById(productId);

    if (product.length !== 0) {
      return res.status(200).json(product);
    } else {
      return res
        .status(204)
        .json({ success: false, message: "product not present" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "error in getting product", error });
  }
}

// use to create a product
async function addProduct(req, res) {
  const files = req.files;

  try {
    const {
      name,
      description,
      sizes,
      categoryId,
      materialType,
      styleType,
      color,
    } = req.body;

    const stock = parseFloat(req.body.stock);
    const price = parseFloat(req.body.price);

    const productId = new mongoose.Types.ObjectId();

    const productImgUrls = await uploadImagesToCloudinary(files, productId);

    const newProduct = await Product.create({
      _id: productId,
      name,
      description,
      stock,
      sizes,
      price,
      categoryId,
      materialType,
      styleType,
      color,
      productImgUrls,
    });

    const populateProduct = await Product.findById(productId).populate(
      "categoryId",
      "category trending subCategory"
    );

    for (const file of files) {
      fs.unlink(file.path, (err) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("photos deleted successfully");
        }
      });
    }

    return res.status(201).json({ message: "product is created successfully" });
  } catch (error) {
    console.log(error);
    for (const file of files) {
      fs.unlink(file.path, (err) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("photos deleted successfully from upload folder");
        }
      });
    }

    return res
      .status(500)
      .json({ success: false, message: "error in product", error });
  }
}

// to update a product
async function updateProduct(req, res) {
  const files = req.files;
  try {
    const {productId} = req.params;

    if(!productId || !mongoose.Types.ObjectId.isValid(productId)){
      return res.status(400).json({success:false, message:"invalid ProductId"})
    }

    const product = await Product.findById(productId);
    const { productImgUrls, ...rest } = req.body;

    if (files.length > 0) {
      const arrayOfReplacedImgs = product.productImgUrls.filter(
        (img) => !productImgUrls.includes(img)
      );

      for (let i = 0; i < arrayOfReplacedImgs.length; i++) {
        const secure_url = arrayOfReplacedImgs[i];
        let file = files[i];

        const updatedImageUrl = await updateUploadedImagesToCloudinary(
          file,
          secure_url
        );

        if (updatedImageUrl) {
          productImgUrls.push(updatedImageUrl);
        }
      }

      const updatedProduct = await Product.findByIdAndUpdate(productId, {
        productImgUrls: productImgUrls,
        ...rest,
      });

      for (const file of files) {
        fs.unlink(file.path, (err) => {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log("photos deleted successfully folder");
          }
        });
      }

      return res
        .status(200)
        .json({ message: "product is updated successfully" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, {
      ...rest,
    });

    return res.status(200).json({ message: "product is updated successfully" });
  } catch (error) {
    console.log(error);
    for (const file of files) {
      fs.unlink(file.path, (err) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("photos deleted successfully from upload folder");
        }
      });
    }
    return res
      .status(500)
      .json({ success: false, message: "error in updating product", error });
  }
}

// to delete a product
async function deleteProduct(req, res) {
  try {
    const {productId} = req.params;

    if(!productId || !mongoose.Types.ObjectId.isValid(productId)){
      return res.status(400).json({success:false, message:"invalid ProductId"})
    }
    await cloudinary.api.delete_resources_by_prefix(
      `e-commerce-shop/product-page-images/${productId}`
    );
    await cloudinary.api.delete_folder(
      `e-commerce-shop/product-page-images/${productId}`
    );
    await Product.findByIdAndDelete(productId);
    return res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "error in product deletion", error });
  }
}

export {
  getProduct,
  getProductById,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
