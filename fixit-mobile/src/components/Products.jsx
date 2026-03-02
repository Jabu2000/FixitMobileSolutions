import React, { useRef } from "react";
import { productsHome } from "../data/products";

const Products = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 420;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen py-24 overflow-hidden  text-white">

      {/* Heading */}
      <div className="relative z-10 text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our Products
        </h2>
        <p className="text-slate-400 mt-4">
          Premium devices. Competitive prices. Trusted quality.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 flex gap-6 z-20">
        <button
          onClick={() => scroll("left")}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
        >
          →
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="relative z-10 flex gap-10 px-20 py-10 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
      >
        {productsHome.map((product, index) => (
          <div
            key={index}
            className="
            min-w-[340px] h-[450px]
            bg-gradient-to-br from-white/20 to-white/5
            backdrop-blur-2xl
            border border-white/20
            rounded-3xl
            shadow-[0_8px_40px_rgba(0,0,0,0.4)]
            py-10 px-6
            flex flex-col items-center justify-between
            snap-center
            relative overflow-hidden
            transition-all duration-500
            hover:-translate-y-4
            hover:shadow-[0_25px_80px_rgba(0,0,0,0.6)]
            "
          >
            {/* Glass Highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-30 pointer-events-none rounded-3xl" />

            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className=" h-[160px] object-contain relative z-10"
            />

            {/* Product Info */}
            <div className="text-left space-y-4 relative z-10">
              <h3 className="md:text-lg text-[14px] font-semibold">{product.title}</h3>

              <p className="text-slate-300 text-sm">
                {product.description}
              </p>

              <p className="md:text-[16px] text-[14px] font-bold text-white">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
