export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/40">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F97316]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

