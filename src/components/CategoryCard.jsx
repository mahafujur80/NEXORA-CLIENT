import { Link } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';

export default function CategoryCard({ title, description, categorySlug, icon: Icon }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(categorySlug)}`}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F97316]/50 hover:shadow-lg hover:shadow-slate-200/50"
    >
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-[#F97316] group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>

      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 transition-colors group-hover:text-[#F97316]">
        Browse Category
        <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

