import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { Services } from '@/app/pages/Services';
import { HowItWorks } from '@/app/pages/HowItWorks';
import { Pricing } from '@/app/pages/Pricing';
import { RequestPickup } from '@/app/pages/RequestPickup';
import { LocalQuote } from '@/app/pages/LocalQuote';
import { RegionalQuote } from '@/app/pages/RegionalQuote';
import { Contact } from '@/app/pages/Contact';
import { RefundPolicy } from '@/app/pages/RefundPolicy';
import { DiagnosticForm } from '@/app/pages/DiagnosticForm';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/request-pickup" element={<RequestPickup />} />
            <Route path="/local-quote" element={<LocalQuote />} />
            <Route path="/regional-quote" element={<RegionalQuote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/diagnostic" element={<DiagnosticForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}