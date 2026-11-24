import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { FiMenu, FiSearch, FiShoppingCart, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Logo from './Logo';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      navigate(`/shop?search=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/shop');
    }
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-150 ${
      isActive
        ? 'text-[#F97316]'
        : 'text-slate-600 hover:text-slate-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo variant="dark" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
            aria-label="Toggle product search"
          >
            {searchOpen ? <FiX className="h-5 w-5" /> : <FiSearch className="h-5 w-5" />}
          </button>

          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <FiShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F97316] px-1 text-[11px] font-bold text-white shadow-sm">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 md:hidden cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 lg:px-8">
          <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-2xl items-center gap-2">
            <div className="relative flex-1">
              <FiSearch className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by title..."
                autoFocus
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F97316] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F97316] cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-orange-50 text-[#F97316]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

