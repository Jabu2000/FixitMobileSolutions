import React from "react";
import { Star } from "lucide-react";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { reviews } from "../data/products";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      {/* HERO */}
      <section className="relative px-6 2xl:px-40 md:px-30 py-20 xl:py-30 2xl:py-50">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-left py-20 md:py-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Premium{" "}
              <span className="text-blue-500 font-bold">Apple Devices</span>
              <br />&{" "}
              <span className="text-blue-500 font-bold">Mobile Repairs</span> in
              Cape Town
            </h2>

            <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
              Same-day iPhone repairs. Quality-tested devices. Luxury feel,
              affordable pricing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href=""
                target="_blank"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                Shop iPhones
              </a>

              <button className="border text-white px-8 py-3 rounded-full hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                Get Directions
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400 justify-center md:justify-start">
              <span>✔ Same Day Repairs</span>
              <span>✔ Certified Technicians</span>
              <span>✔ Warranty Included</span>
              <span>✔ 4.9★ Customer Rating</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="./assets/hero.png"
              alt="iPhone repair Cape Town"
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">
            Why Choose Fixit Mobile Solutions?
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Fast Turnaround",
              "Premium Quality Parts",
              "Affordable Pricing",
              "Trusted in Cape Town",
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition"
              >
                <div className="text-blue-500 text-4xl mb-4">★</div>
                <h4 className="font-semibold text-lg">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS CAROUSEL COMPONENT */}
      <Products />

      {/* REVIEWS */}
      <section className="relative py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">What Our Clients Say</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl"
              >
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{r.review}"</p>

                <h4 className="mt-6 font-semibold text-white">{r.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERRAL SECTION */}
      <section className="relative py-20 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">
            Earn Commission Referring Clients
          </h3>

          <p className="text-gray-400">
            Refer someone who needs a repair or iPhone. They mention your name.
            Once they complete a purchase, you get paid commission.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Refer a Client",
              "They Mention You",
              "They Purchase",
              "You Get Paid",
            ].map((step, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-blue-600/10 border border-blue-500/20 p-6 rounded-xl"
              >
                <h4 className="font-semibold">{step}</h4>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:text-blue-500 transition"
            >
              @fixitmobliesolution
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
