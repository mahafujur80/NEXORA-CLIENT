export default function Loading({ message = 'Loading products...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-3 border-slate-200 border-t-[#F97316]" />
      <p className="mt-4 text-sm font-medium text-slate-500">{message}</p>
    </div>
  );
}

