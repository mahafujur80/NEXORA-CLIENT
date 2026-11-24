import { Link } from 'react-router';
import { FiShoppingBag } from 'react-icons/fi';

export default function Logo({ variant = 'dark', showTagline = false }) {
  const isLight = variant === 'light';

  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2.5 group focus:outline-none"
      aria-label="NEXORA Home"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${
          isLight
            ? 'bg-[#F97316] text-white'
            : 'bg-slate-900 text-white'
        }`}
      >
        <FiShoppingBag className="h-4.5 w-4.5 text-[#F97316] group-hover:text-white transition-colors duration-200" style={isLight ? { color: '#FFFFFF' } : undefined} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-xl font-extrabold tracking-tight ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          NEXORA<span className="text-[#F97316]">.</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[11px] font-medium tracking-wide ${
              isLight ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Shop Smarter. Live Better.
          </span>
        )}
      </span>
    </Link>
  );
}

