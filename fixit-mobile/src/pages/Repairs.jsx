import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import { productservice } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

export default function Repairs() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 pt-12">
        {/* HERO */}
        <section className="text-center py-24 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-normal mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-4">
              Premium <span className="text-blue-500 font-bold">Devices </span>
              Repairs
            </h1>
          </motion.h1>

          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Fast, professional, and reliable repair services for your Apple
            devices. We restore your tech to peak performance.
          </p>

          <a
            href="https://wa.me/27647254427"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-500/40 font-medium"
          >
            Book a Repair
          </a>
        </section>

        {/* TRUST INDICATORS */}
        <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6 pb-20">
          {[
            { stat: "1000+", label: "Devices Repaired" },
            { stat: "Same Day", label: "Turnaround" },
            { stat: "6 Month", label: "Warranty" },
            { stat: "5★", label: "Customer Rating" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold">{item.stat}</h3>
              <p className="text-slate-400">{item.label}</p>
            </div>
          ))}
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-24">
          {productservice.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                p-8
                rounded-2xl
                bg-gradient-to-br from-white/10 to-white/5
                backdrop-blur-xl
                border border-white/10
                shadow-xl
                overflow-hidden
              "
            >
              {/* Glass Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none rounded-2xl" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">
                  {service.service}
                </h3>

                <p className="text-slate-300 mb-6">{service.description}</p>

                <a
                  href="https://wa.me/27647254427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:text-blue-300 transition"
                >
                  Enquire →
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-6xl mx-auto text-center px-6 pb-24">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>

          <p className="text-slate-400 mb-12 max-w-3xl text-center mx-auto">
            We combine expert technicians, premium parts, and transparent
            pricing to deliver a repair experience you can trust.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Certified Technicians",
              "Premium Quality Parts",
              "Fast & Reliable Service",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 backdrop-blur-lg bg-blue-600/10 border border-blue-500/20 rounded-xl"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix Your Device?
          </h2>

          <a
            href="https://wa.me/27647254427"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-blue-500/40 font-medium text-[14px]"
          >
            Chat on WhatsApp
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
