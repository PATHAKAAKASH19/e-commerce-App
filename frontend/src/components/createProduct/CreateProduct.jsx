import React, { useEffect, useState } from "react";
import Container from "../ui/container/Container";
import InputBox from "../ui/inputBox/InputBox";
import { MdDelete } from "react-icons/md";

export default function CreateProduct() {
  const [productDetail, setProductDetail] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    materialType: "",
    styleType: "",
    color: "",
    categoryId: "",
    category:""
  });

  const [size, setSize] = useState([]);
  const [category, setCategory] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const MAX_IMAGES = 5;

  const handleInput = (e) => {
    if (e.target.name === "category") {
      if (e.target.value) {
        const result = category.find((ele) => e.target.value === ele.category);
        setProductDetail((prev) => ({ ...prev, categoryId: result._id , [e.target.name]:e.target.value}));
      } else {
        return;
      }
    } else {
      setProductDetail((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  const handleSizeInput = (e) => {
    if (e.target.checked) {
      setSize((prev) => [...prev, e.target.name]);
    } else {
      setSize((prev) => prev.filter((value, i) => value !== e.target.name));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", productDetail.name);
      formData.append("description", productDetail.description);
      formData.append("stock", productDetail.stock);

      formData.append("price", productDetail.price);
      formData.append("categoryId", productDetail.categoryId);
      console.log(productDetail.categoryId);
      formData.append("materialType", productDetail.materialType);
      formData.append("styleType", productDetail.styleType);
      formData.append("color", productDetail.color);

      size.forEach((obj, index) => {
        formData.append(`sizes[${index}]`, obj);
      });
      productImages.forEach((file) => {
        formData.append(`productImages`, file);
      });

      const res = await fetch("http://localhost:3000/api/product/create", {
        method: "POST",
        body: formData,
      });

      const msg = await res.json();

      if (res.status === 201) {
        alert("product created successfully");
        setProductDetail({
          name: "",
          description: "",
          stock: "",
          price: "",
          materialType: "",
          styleType: "",
          color: "",
          categoryId: "",
          category:""
        });
        setPreviewImages([]);
        setProductImages([]);
        setSize([]);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleImages = (e) => {
    const files = e.target.files;
    const arrayFIles = Array.from(files);
    if (productImages.length + files.length > MAX_IMAGES) {
      alert("can only add 5 images");
      return;
    }

    if (previewImages.length + files.length < MAX_IMAGES) {
      alert("add five images for product ");
    }

    setProductImages((prev) => [...prev, ...files]);
    const urls = arrayFIles.map((file) => URL.createObjectURL(file));
    console.log(urls);
    console.log(productImages);
    setPreviewImages((prev) => [...prev, ...urls]);
  };

  const handleImgDelete = (index) => {
    setProductImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/category/get");
        const categoryData = await res.json();

        if (categoryData) {
          setCategory(categoryData);
        }
      } catch (error) {
        console.log("error : ", error);
      }
    };

    getCategory();
  }, []);

  const checkSizePresent = (sizeValue) => {
    if (size.includes(sizeValue)) {
      return true
    }else{
      return false
    }
  };

  return (
    <Container className="admin-panel">
      <Container className="create-category create-product">
        <h1>Create Product</h1>
        <form onSubmit={handleFormSubmit} className="product-form">
          <Container className="box">
            <InputBox
              type="text"
              placeholder="Enter product name"
              name="name"
              value={productDetail.name}
              onChange={handleInput}
              required
            />
          </Container>

          <Container className="box" id="textarea1">
            <textarea
              placeholder="Enter product description"
              name="description"
              value={productDetail.description}
              onChange={handleInput}
              required
            />
          </Container>

          <Container className="box">
            <InputBox
              type="number"
              placeholder="Enter product quantity"
              min={10}
              name="stock"
              value={productDetail.stock}
              onChange={handleInput}
              required
            />
          </Container>

          <Container className="box">
            <InputBox
              type="number"
              placeholder="Enter product price"
              min={0}
              name="price"
              value={productDetail.price}
              onChange={handleInput}
              required
            />
          </Container>

          <Container className="box">
            <InputBox
              type="text"
              placeholder="Enter product material"
              name="materialType"
              value={productDetail.materialType}
              onChange={handleInput}
              required
            />
          </Container>

          <Container className="box">
            <InputBox
              type="text"
              placeholder="Enter product style"
              name="styleType"
              value={productDetail.styleType}
              onChange={handleInput}
              required
            />
          </Container>

          <Container className="box">
            <InputBox
              type="text"
              placeholder="Enter product color"
              name="color"
              value={productDetail.color}
              onChange={handleInput}
              required
            />
          </Container>

          <Container className="box">
            <select name="category" onChange={handleInput}  value={productDetail.category}>
              <option value="" disabled>
                Select an option
              </option>
              {category &&
                category.map((ctg, i) =>
                  ctg.category === "banner" ||
                  ctg.category === "banner2" ? null : (
                    <option value={`${ctg.category}`} key={i}>
                      {ctg.category}
                    </option>
                  )
                )}
            </select>
          </Container>

          <Container className="sizes-con">
            <h2>sizes</h2>
            {sizes.map((s, i) => (
              <Container className="size1" key={i}>
                <InputBox
                  type="checkbox"
                  id={s}
                  name={s}
                  checked={size.includes(s)}
                  onChange={handleSizeInput}
                  className="checkbox"
                />
                <label htmlFor={s} className="label">
                  {s}
                </label>
              </Container>
            ))}
          </Container>

          <Container className="upload" style={{ alignSelf: "center" }}>
            <label>
              upload product image
              <InputBox
                type="file"
                name="images"
                multiple
                accept="image/*"
                onChange={handleImages}
                disabled={previewImages.length >= MAX_IMAGES}
                className="uploadbox"
              />
            </label>
          </Container>

          <Container className="product-box">
            {previewImages &&
              previewImages.map((image, i) => {
                return (
                  <Container className="product-img" key={i}>
                    <img key={i} src={`${image}`} />
                    <MdDelete
                      onClick={() => handleImgDelete(i)}
                      className="icon"
                    />
                  </Container>
                );
              })}
          </Container>

          <button type="submit">submit</button>
        </form>
      </Container>
    </Container>
  );
}
