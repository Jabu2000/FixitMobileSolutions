import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 md:px-20 py-16 text-gray-400">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-2xl font-bold text-white">Fixit Mobile</h4>
          <div className="mt-4 text-sm space-y-2">
            <p>55 Castle Street, Cape Town, 8001</p>
            <p>Open 9AM – 6PM</p>
            <p>Call: 067 177 2048</p>
            <p>WhatsApp: 064 725 4427</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Repairs</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Directions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Subscribe</h4>
          <div className="flex bg-white/10 rounded-full overflow-hidden border border-white/10">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-transparent text-white flex-1 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-blue-500/40 cursor-pointer px-6">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="mt-12 text-sm text-center text-gray-500">
          © 2026 Fixit Mobile. All rights reserved.
        </div>
        <p className="mt-12 text-[12px] text-end text-gray-500">
          MADE BY THE SYSTEM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
