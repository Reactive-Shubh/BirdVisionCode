import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import Slider from "./Slider/Slider";

const ProductDetails = () => {
  const params = useParams();
  //Get from url
  const productId = params?.productId;

  const productsData = useSelector((state) => state.productsData);

  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    //Check for productId
    if (productId) {
      const prDetail = productsData.products?.find((f) => f.id == productId);
      //If data already in state
      if (prDetail) {
        setProductDetails(prDetail);
      } else {
        //fetch data for productId
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://dummyjson.com/products/${productId}`
            );
            const data = await response.json();

            setProductDetails(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }
    }
  }, [productId]);

  return (
    <div className="container">
      <Slider>
        <img src={productDetails?.images[0]} alt={productDetails?.title} />
        <img src={productDetails?.images[1]} alt={productDetails?.title} />
        <img src={productDetails?.images[2]} alt={productDetails?.title} />
      </Slider>
      <div className="details">
        <h1>{productDetails?.title}</h1>
        <h2>{productDetails?.description}</h2>
        <h3>
          ${productDetails?.price} with extra (
          {productDetails?.discountPercentage}%) off
        </h3>
        <p>Rating : {productDetails?.rating}</p>
        <p>Brand : {productDetails?.brand}</p>
        <p>Category : {productDetails?.category}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
