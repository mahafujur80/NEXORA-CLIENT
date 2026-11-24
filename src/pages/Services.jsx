import { Link } from 'react-router';
import {
  FiArrowRight,
  FiAward,
  FiHeadphones,
  FiRefreshCw,
  FiShield,
  FiTag,
  FiTruck,
} from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';

const SERVICES = [
  {
    title: 'Fast & Free Delivery',
    description:
      'Enjoy complimentary standard shipping on orders over $50 and reliable, tracked dispatch right to your doorstep.',
    icon: FiTruck,
  },
  {
    title: 'Secure Payment',
    description:
      'Shop with confidence knowing your checkout experience is protected by industry-standard encryption and privacy safeguards.',
    icon: FiShield,
  },
  {
    title: 'Easy Returns & Refunds',
    description:
      'Changed your mind? Return eligible items within 30 days for a smooth, no-hassle exchange or full refund.',
    icon: FiRefreshCw,
  },
  {
    title: 'Customer Support',
    description:
      'Our dedicated NEXORA support team is available 24/7 to assist with orders, sizing, and product questions.',
    icon: FiHeadphones,
  },
  {
    title: 'Quality Products',
    description:
      'Every item in our catalog is carefully inspected and sourced from trusted partners to meet our high standards.',
    icon: FiAward,
  },
  {
    title: 'Exclusive Offers',
    description:
      'Unlock seasonal member savings, bundle discounts, and early access to curated product drops.',
    icon: FiTag,
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
              NEXORA Services
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Designed Around Your Shopping Experience
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              From fast delivery to 24/7 support, every service at NEXORA is built to make online shopping simple, secure, and dependable.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-8 sm:flex-row sm:p-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Need help with an order or have a question?
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Reach out to the NEXORA team anytime—we are always happy to help.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316]"
          >
            Contact Support
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

