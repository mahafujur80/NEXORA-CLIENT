import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi';

export default function ErrorMessage({
  title = 'Something went wrong',
  message = 'We could not load the requested data. Please check your connection and try again.',
  onRetry,
}) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-red-100 bg-red-50/60 p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <FiAlertCircle className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F97316] cursor-pointer"
        >
          <FiRefreshCw className="h-4 w-4" />
          Try Again
        </button>
      )}
    </div>
  );
}

