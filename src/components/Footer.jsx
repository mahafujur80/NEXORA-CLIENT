import { Link } from 'react-router';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import Logo from './Logo';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const SUPPORT_LINKS = [
  { to: '/services', label: 'Shipping & Delivery' },
  { to: '/services', label: 'Returns & Refunds' },
  { to: '/cart', label: 'Your Cart' },
  { to: '/contact', label: 'Help Center' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" showTagline />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Your destination for curated fashion, modern electronics, and timeless jewelry. Thoughtfully selected for quality, value, and everyday style.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="NEXORA on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-[#F97316] hover:text-white"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="NEXORA on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-[#F97316] hover:text-white"
              >
                <FiTwitter className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="NEXORA on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-[#F97316] hover:text-white"
              >
                <FiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="NEXORA on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition hover:bg-[#F97316] hover:text-white"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition hover:text-[#F97316]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Customer Support
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition hover:text-[#F97316]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Store Promise
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Free shipping on orders over $50, 30-day hassle-free returns, and dedicated 24/7 customer care.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-xs font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              100% Secure Checkout
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 NEXORA. All rights reserved.
          </p>
          <p className="text-xs font-medium text-slate-500">
            <span className="font-bold text-white">NEXORA<span className="text-[#F97316]">.</span></span> — Shop Smarter. Live Better.
          </p>
        </div>
      </div>
    </footer>
  );
}

