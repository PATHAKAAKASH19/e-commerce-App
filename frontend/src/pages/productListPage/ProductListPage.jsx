import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/ui/card/Card";
import FilterComponent from "../../components/filterComponent/FilterComponent";
import Container from "../../components/ui/container/Container";

export default function ProductListPage() {
  let { category } = useParams();

  const [productsImage, setProductsImage] = useState(null);

  useEffect(() => {
    const fetchProductsImage = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/product/get?category=${category}`
        );
        const productsImage = await res.json();

        if (productsImage !== null) {
          setProductsImage(productsImage);
        }
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchProductsImage();
  }, []);

  return (
    <Container className="productList">
      <FilterComponent className="filter"></FilterComponent>
      {productsImage && (
        <Container className="product-column">
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
          <Card
            image={productsImage}
            type="productList"
            route={`/product/${productsImage[0]._id}`}
          />
        </Container>
      )}
    </Container>
  );
}
