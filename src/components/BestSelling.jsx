"use client";
import React from "react";
import { ProductCard } from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

export const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/v1/product/all"
    );
    setProducts(data);
    return data;
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="w-[95%] mx-auto my-8">
      <div className="flex flex-row justify-between mb-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded"></div>
            <span
              className="text-[#DB4444] font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              This Month
            </span>
          </div>
          <h1
            className="text-4xl font-semibold"
            style={{ fontFamily: "Poppins", color: "#000000" }}
          >
            Best Selling Products
          </h1>
        </div>
        <div>
          <button
            className="bg-[#DB4444] text-white flex flex-row gap-2 items-center px-4 py-2 rounded"
            style={{ fontFamily: "Poppins" }}
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center gap-5 mb-8 overflow-x-auto overflow-y-hidden">
        {
          // Fetch all products from the backend and display them
          products?.slice(0,5).map((product) => (
            <ProductCard
              key={product._id}
              img={product.ImageLnk}
              desc={product.ShortDsc}
              beforeDisc={product.BeforeDisc}
              afterDisc={product.AfterDisc}
            />
          ))
        }
      </div>
      <div className="divider divider-neutral"></div>
    </div>
  );
};
