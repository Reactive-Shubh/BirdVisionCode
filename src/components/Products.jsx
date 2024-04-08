import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

import "../styles/Products.css";
import { setProducts, setTotal } from "../redux/productsSlice";
import PaginationComponent from "./PaginationComponent";

export default function Products() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productsData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        dispatch(setProducts(data.products));
        dispatch(setTotal(data.limit));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const total = productsData.total;

  const itemsPerPage = 10;

  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;

  return (
    <>
      <div className="ourpd">
        <h3>OUR PRODUCTS</h3>
      </div>
      <div className="home">
        {productsData?.products?.slice(start, end).map((i) => (
          <ProductCard
            key={i.id}
            productId={i.id}
            thumbnail={i.thumbnail}
            title={i.title}
            price={i.price}
          />
        ))}
      </div>
      <PaginationComponent
        items={total}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
