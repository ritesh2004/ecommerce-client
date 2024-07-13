import React from "react";

export const Carousel = () => {
  return (
    <div className="carousel carousel-center bg-transparent rounded-box max-w-screen space-x-4 p-8">
      <div className="carousel-item">
        <img
          src="/headphone.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/camera.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/smartWatch.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/smartWatch2.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/smartPhone.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/multiproducts.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/eproducts.jpg"
          className="rounded-box"
        />
      </div>
    </div>
  );
};
