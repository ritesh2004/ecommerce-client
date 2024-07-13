"use client";
import React, { useState } from "react";
import Image from "next/image";

export const ProductCard = ({img,desc,beforeDisc,afterDisc,rating}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-[270px] h-[450px] bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[250px] bg-[#F5F5F5] flex justify-center items-center rounded">
        <figure className="w-[190px] h-[180px] flex justify-center items-center">
          <Image
            src={img}
            className="rounded-box"
            width={172}
            height={172}
          />
        </figure>
        <div
          className="absolute top-[12px] left-[12px] h-[26px] w-[55px] bg-[#DB4444] flex justify-center items-center text-xs text-[#FAFAFA] rounded"
          style={{ fontFamily: "Poppins" }}
        >
          -50%
        </div>
        <div className="absolute top-[12px] right-[12px] w-[34px] h-[76px] bg-transparent text-black flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </button>
          <button className="p-2 bg-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
          </button>
        </div>
        {isHovered && (
          <div className="absolute bottom-0 w-full h-[41px] bg-[#000000] flex justify-center items-center cursor-pointer">
            <span>Add To Cart</span>
          </div>
        )}
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <span
          className="text-black text-base"
          style={{ fontFamily: "Poppins" }}
        >
          {desc}
        </span>
        <div className="flex gap-2 items-center">
          <span className="text-[#DB4444] text-base">₹{afterDisc}</span>
          <span className="text-[#BDBDBD] line-through">₹{beforeDisc}</span>
        </div>
        <div className="w-full flex flex-row gap-2 items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="text-[#BDBDBD] text-base">(23)</span>
        </div>
      </div>
    </div>
  );
};
