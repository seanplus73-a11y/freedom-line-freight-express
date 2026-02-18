import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Truck, Shield, Clock, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-start">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763995222578-19d1d8160ab8?w=1920"
              alt="SUV driving on open highway"
              className="w-full h-full object-cover brightness-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-24">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl mb-6">
                Insured & Reliable Vehicle Pickup, Handled Personally
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Owner-operated drive-away service for running, drivable vehicles only.
                No towing. No brokers. No middlemen.
              </p>
              <a
                href="mailto:dispatch@flfreightco.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md transition-colors text-lg"
              >
                Request Pickup
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4">Why Choose Freedom Line?</h2>
              <p className="text-xl text-gray-600">
                Owner-operated, reliable vehicle pickup & delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Fully Insured',
                  description: '$1M General Liability coverage. COI available upon request.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Professional Driver',
                  description: 'Experienced, licensed, and insured owner-operator.',
                },
                {
                  icon: Clock,
                  title: 'On-Time Delivery',
                  description: 'We understand deadlines and prioritize reliable delivery',
                },
                {
                  icon: MessageCircle,
                  title: 'Clear Communication',
                  description: 'Regular updates throughout the entire process',
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today for fast, reliable vehicle transport
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4807428553"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md transition-colors text-lg"
              >
                Text: (480) 742-8553
              </a>
              <a
                href="mailto:dispatch@flfreightco.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md transition-colors text-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;