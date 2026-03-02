import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { productsAccessory, productsIphone } from "../data/products";

export default function Shop() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="relative flex flex-col gap-12 px-6 md:px-10 py-40 2xl:py-50">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-6 xl:px-20 2xl:px-60"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-4">
            Premium{" "}
            <span className="text-blue-500 font-bold">
              Apple Devices Tested. Guaranteed.
            </span>
            {" "}Solutions offers a carefully
            selected range
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            New & Pre-Owned Apple Devices.
          </p>
        </motion.div>

        <div className="mt-20 2xl:mt-40 gap-20 flex flex-col">
          <div>
            <h1 className="text-2xl font-bold mb-6">Available iPhones List</h1>
            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
              {productsIphone.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="
                w-full
                h-[410px]
                bg-gradient-to-br from-white/10 to-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                shadow-xl
                py-8 md:px-6 px-3 mb-10 
                flex flex-col items-center justify-between
                relative overflow-hidden
              "
                >
                  {/* Glass Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none rounded-3xl" />

                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-[120px] object-contain relative z-10"
                  />

                  {/* Product Info */}
                  <div className="text-left space-y-3 relative z-10">
                    <h3 className="md:text-lg text-[14px] font-semibold">
                      {product.title}
                    </h3>

                    <p className="text-slate-400 md:text-sm text-[12px]">
                      {product.description}
                    </p>

                    <p className="md:text-[16px] text-[14px] font-bold text-white">
                      {product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold mb-6">Available Accessory List</h1>
            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
              {productsAccessory.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="
                w-full
                md:h-[300px] h-[280px]
                bg-gradient-to-br from-white/10 to-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                shadow-xl
                py-8 md:px-6 px-3 mb-10 
                flex flex-col items-center justify-between
                relative overflow-hidden
              "
                >
                  {/* Glass Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none rounded-3xl" />

                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-[120px] object-contain relative z-10"
                  />

                  {/* Product Info */}
                  <div className="text-left space-y-3 relative z-10">
                    <h3 className="md:text-lg text-[14px] font-semibold">
                      {product.title}
                    </h3>

                    <p className="text-slate-400 md:text-sm text-[12px]">
                      {product.description}
                    </p>

                    <p className="md:text-[16px] text-[14px] font-bold text-white">
                      {product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
