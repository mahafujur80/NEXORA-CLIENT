import { Link } from 'react-router';
import { FiArrowRight, FiAward, FiCheckCircle, FiCompass, FiHeart, FiShield } from 'react-icons/fi';

const TRUST_PILLARS = [
  {
    title: 'Curated Quality',
    description: 'Every product on NEXORA is vetted for durability, design, and everyday value.',
    icon: FiAward,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or inflated markups—just honest prices on great products.',
    icon: FiShield,
  },
  {
    title: 'Customer-First Care',
    description: 'Dedicated 24/7 support and hassle-free returns built around your peace of mind.',
    icon: FiHeart,
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
              About NEXORA
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Shop Smarter. Live Better.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              NEXORA is a modern online shopping destination built around simplicity, quality, and trust. We bring together thoughtfully selected apparel, electronics, and jewelry in one clean, effortless experience.
            </p>
          </div>
        </div>
      </section>

      {/* About the Store + Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Built for Modern Everyday Shopping
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We started NEXORA with a clear observation: online shopping had become noisy, cluttered, and overwhelming. Our goal was to create a store that feels calm, reliable, and genuinely helpful from discovery to delivery.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Whether you are upgrading your workspace tech, refreshing your wardrobe, or picking out a timeless piece of jewelry, NEXORA makes finding the right product fast and enjoyable.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Carefully vetted catalog across 4 core departments',
                'Fast order processing with real-time cart persistence',
                '30-day straightforward return and refund policy',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <FiCheckCircle className="h-4.5 w-4.5 shrink-0 text-[#F97316]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-slate-900">10k+</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Orders Delivered</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-[#F97316]">99.2%</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Satisfaction Rate</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-slate-900">30 Days</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Easy Returns</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold text-slate-900">24/7</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Customer Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
                <FiCompass className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                To make quality products accessible through an intuitive, transparent, and customer-centric e-commerce experience—helping people shop smarter every day.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <FiAward className="h-5 w-5 text-[#F97316]" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                To become the most trusted everyday retail brand known for refined curation, dependable delivery, and uncompromising care for every customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
            Our Promise
          </p>
          <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why Customers Trust NEXORA
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#F97316]"
          >
            Start Shopping
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

