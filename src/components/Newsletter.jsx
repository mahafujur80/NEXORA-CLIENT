import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiMail } from 'react-icons/fi';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    toast.success('Thank you for subscribing to NEXORA updates!');
    setEmail('');
  };

  return (
    <section className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[#F97316]">
              <FiMail className="h-3.5 w-3.5" />
              NEXORA Newsletter
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Stay ahead with exclusive drops &amp; offers
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Subscribe to receive curated product updates, seasonal deals, and insider access from NEXORA. No spam, unsubscribe anytime.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F97316] focus:bg-white focus:outline-none sm:max-w-xs"
              />
              <button
                type="submit"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316] cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

