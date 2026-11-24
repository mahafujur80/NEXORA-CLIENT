import { Link } from 'react-router';
import { FiArrowRight, FiCheckCircle, FiShield, FiShoppingBag, FiStar, FiTruck } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#F97316]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
              NEXORA — Shop Smarter. Live Better.
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Curated Essentials for Modern Living.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Discover handpicked fashion, smart electronics, and timeless jewelry designed for everyday quality. Enjoy seamless shopping, fast delivery, and transparent pricing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#F97316]"
              >
                Shop Now
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Collection
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-8 sm:max-w-md">
              <div>
                <p className="text-2xl font-extrabold text-slate-900">10k+</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">Happy Shoppers</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">4.9/5</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">Customer Rating</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">24/7</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">Dedicated Care</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <FiShoppingBag className="h-5 w-5 text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">NEXORA Curated</p>
                    <p className="text-xs text-slate-500">2026 Seasonal Edit</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  In Stock
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#F97316] shadow-sm">
                    <FiTruck className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-900">Express Delivery</p>
                  <p className="mt-1 text-xs text-slate-500">Free shipping on orders over $50</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm">
                    <FiShield className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-900">Verified Quality</p>
                  <p className="mt-1 text-xs text-slate-500">Authentic items & 30-day returns</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-900 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium tracking-wider text-orange-400 uppercase">
                      Member Benefit
                    </p>
                    <p className="mt-1 text-lg font-bold">Up to 30% Off New Arrivals</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-semibold">
                    <FiStar className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />
                    Top Rated
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                  <FiCheckCircle className="h-4 w-4 text-emerald-400" />
                  Instant order tracking &amp; secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

