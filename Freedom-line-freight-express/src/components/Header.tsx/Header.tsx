import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-gray-900">Freedom Line Freight Express</span>
            <span className="text-xs text-gray-600">Vehicle Pickup & Delivery</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="tel:4807428553" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Text Us
            </a>
            <a href="mailto:dispatch@flfreightco.com" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Email
            </a>
            <a
              href="mailto:dispatch@flfreightco.com"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Request Pickup
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <a
              href="tel:4807428553"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Text: (480) 742-8553
            </a>
            <a
              href="mailto:dispatch@flfreightco.com"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Email Us
            </a>
            <a
              href="mailto:dispatch@flfreightco.com"
              className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Pickup
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}