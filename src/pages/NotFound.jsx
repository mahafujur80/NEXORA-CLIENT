import { Link } from 'react-router';
import { FiArrowLeft, FiShoppingBag } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#F97316] uppercase">
        404 Error
      </span>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to NEXORA.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316]"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          <FiShoppingBag className="h-4 w-4" />
          Browse Shop
        </Link>
      </div>
    </div>
  );
}

