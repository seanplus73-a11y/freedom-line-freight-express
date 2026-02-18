src/app/components/Footer.tsx


import { Link } from 'react-router-dom';
import { Truck, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6 text-blue-400" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-300">Freedom Line Freight Express</span>
                <span className="text-gray-300">Vehicle Pickup & Delivery</span>
              </div>
            </div>
            <div className="max-w-[700px]">
              <div className="text-gray-300 space-y-5">
                <p>
                  Freedom Line Freight Express is a Deaf-owned vehicle pickup and delivery company providing reliable local and regional transport services across the United States.
                </p>
                <p>
                  We specialize in dealer-to-dealer transfers, auction pickups, private vehicle delivery, and small fleet logistics, offering professional drivers, transparent pricing, and dependable service from pickup to delivery.
                </p>
                <p>
                  Clear communication, accountability, and respect for your time are at the core of how we operate. For fast service and accurate updates, text and email are the preferred ways to reach us.
                </p>
              </div>
              
              <p className="text-blue-400 font-semibold mt-12 mb-8">
                Proudly Deaf-owned. Built on clear communication, reliability, and trust.
              </p>
              
              <div className="space-y-2">
                <p className="text-gray-200 font-semibold">
                  Fully insured — $1M General Liability.
                </p>
                <p className="text-gray-400">
                  Certificate of Insurance (COI) available upon request.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors">
                    Refund & Deposit Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Local Vehicle Pickup</li>
                <li>Long-Distance Transport</li>
                <li>Dealer-to-Dealer</li>
                <li>Auction Pickup</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="font-semibold mb-4 text-center">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 text-gray-300 mb-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Text (Preferred)</span>
              </div>
              <a href="tel:4807428553" className="text-blue-400 hover:text-blue-300 transition-colors">
                (480) 742-8553
              </a>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 text-gray-300 mb-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Phone (Relay Service)</span>
              </div>
              <a href="tel:5206007244" className="text-blue-400 hover:text-blue-300 transition-colors">
                (520) 600-7244
              </a>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 text-gray-300 mb-2">
                <Mail className="h-4 w-4" />
                <span className="font-semibold">Email</span>
              </div>
              <a href="mailto:dispatch@flfreightco.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                dispatch@flfreightco.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="text-gray-300">&copy; 2026 Freedom Line Freight Express LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}