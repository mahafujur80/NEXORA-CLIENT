import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const CONTACT_INFO = [
  {
    title: 'Email Support',
    detail: 'support@nexora.shop',
    subtitle: 'Typically replies within 2 hours',
    icon: FiMail,
  },
  {
    title: 'Phone',
    detail: '+1 (800) 555-0199',
    subtitle: 'Mon–Sun, 24/7 Customer Care',
    icon: FiPhone,
  },
  {
    title: 'Headquarters',
    detail: '240 Market Street, Suite 400',
    subtitle: 'San Francisco, CA 94105',
    icon: FiMapPin,
  },
  {
    title: 'Support Hours',
    detail: 'Always Open (24/7)',
    subtitle: 'Online order & return assistance',
    icon: FiClock,
  },
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the highlighted fields before submitting.');
      return;
    }

    toast.success('Demo submission recorded! Thank you for contacting NEXORA.');
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
              Contact NEXORA
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              We&apos;d Love to Hear From You
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Have a question about an order, product availability, or partnership? Reach out to the NEXORA team using the form or contact details below.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-800">{item.detail}</p>
                <p className="mt-0.5 text-xs text-slate-500">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="mt-14 mx-auto max-w-3xl rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Send Us a Message</h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Note: This frontend demo simulates form submission locally without sending data to a backend server.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Alex Morgan"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
                    errors.fullName
                      ? 'border-red-400 bg-red-50/40 focus:border-red-500'
                      : 'border-slate-200 bg-slate-50 focus:border-[#F97316] focus:bg-white'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
                    errors.email
                      ? 'border-red-400 bg-red-50/40 focus:border-red-500'
                      : 'border-slate-200 bg-slate-50 focus:border-[#F97316] focus:bg-white'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Order inquiry, product question, feedback..."
                className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
                  errors.subject
                    ? 'border-red-400 bg-red-50/40 focus:border-red-500'
                    : 'border-slate-200 bg-slate-50 focus:border-[#F97316] focus:bg-white'
                }`}
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs font-medium text-red-600">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
                  errors.message
                    ? 'border-red-400 bg-red-50/40 focus:border-red-500'
                    : 'border-slate-200 bg-slate-50 focus:border-[#F97316] focus:bg-white'
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#F97316] cursor-pointer"
            >
              <FiSend className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

