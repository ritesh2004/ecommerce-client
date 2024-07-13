import React from "react";

export const CategoryItem = ({svg,category}) => {
  return (
    <div className="w-[170px] h-[145px] flex flex-col gap-6 justify-center items-center border border-slate-700 rounded text-black cursor-pointer hover:bg-[#DB4444] hover:text-white">
      {svg}
      <span className="text-base text-center" style={{fontFamily:"Poppins"}}>{category}</span>
    </div>
  );
};
