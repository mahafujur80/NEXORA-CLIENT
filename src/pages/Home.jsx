import { Link } from 'react-router';
import {
  FiArrowRight,
  FiCpu,
  FiHeadphones,
  FiLayers,
  FiRefreshCw,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiAward,
} from 'react-icons/fi';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import Newsletter from '../components/Newsletter';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useProducts } from '../hooks/useProducts';

const CATEGORIES = [
  {
    title: "Men's Clothing",
    description: 'Tailored essentials, casual jackets, and everyday staples.',
    categorySlug: "men's clothing",
    icon: FiLayers,
  },
  {
    title: "Women's Clothing",
    description: 'Modern silhouettes, seasonal layers, and refined comfort.',
    categorySlug: "women's clothing",
    icon: FiShoppingBag,
  },
  {
    title: 'Electronics',
    description: 'High-performance storage, monitors, and smart accessories.',
    categorySlug: 'electronics',
    icon: FiCpu,
  },
  {
    title: 'Jewelry',
    description: 'Minimalist rings, bracelets, and timeless statement pieces.',
    categorySlug: 'jewelery',
    icon: FiAward,
  },
];

const TRUST_FEATURES = [
  {
    title: 'Free Shipping',
    description: 'Complimentary standard delivery on all orders over $50.',
    icon: FiTruck,
  },
  {
    title: 'Secure Payment',
    description: 'Encrypted checkout flow built for safe, worry-free shopping.',
    icon: FiShield,
  },
  {
    title: 'Easy Returns',
    description: '30-day straightforward returns with fast refund processing.',
    icon: FiRefreshCw,
  },
  {
    title: '24/7 Support',
    description: 'Responsive customer care team ready whenever you need help.',
    icon: FiHeadphones,
  },
];

export default function Home() {
  const { products, loading, error, refetch } = useProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
              Curated Selection
            </p>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Featured Products
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition hover:text-[#F97316]"
          >
            View All Products
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8">
          {loading && <Loading message="Loading featured products..." />}
          {error && <ErrorMessage message={error} onRetry={refetch} />}
          {!loading && !error && <ProductGrid products={featuredProducts} />}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="border-y border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
              Shop by Department
            </p>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Explore Our Categories
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.categorySlug} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-slate-900 p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#F97316]/20 px-3 py-1 text-xs font-semibold text-[#F97316]">
              Limited Time Offer at NEXORA
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Upgrade Your Everyday Collection — Save Up to 25%
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Enjoy free standard shipping on orders over $50 and discover top-rated fashion, electronics, and jewelry in one place.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Shop the Sale
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
            The NEXORA Standard
          </p>
          <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center transition hover:border-slate-300 hover:shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <Newsletter />
    </>
  );
}

