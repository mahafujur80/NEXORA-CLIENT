import { Link } from 'react-router';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showAddToCart = true }) {
  const { addToCart } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
      <Link
        to={`/product/${product.id}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden bg-white p-3.5 sm:p-6"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 rounded-md sm:rounded-lg bg-slate-100/90 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold capitalize text-slate-600 backdrop-blur-xs">
          {product.category === 'jewelery' ? 'Jewelry' : product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col border-t border-slate-100 p-3 sm:p-5">
        <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-medium text-slate-500">
          <FiStar className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400 text-amber-400 shrink-0" />
          <span className="font-semibold text-slate-800">
            {product.rating?.rate ?? '4.5'}
          </span>
          <span className="truncate">({product.rating?.count ?? 0})</span>
        </div>

        <Link to={`/product/${product.id}`} className="mt-1.5 sm:mt-2">
          <h3 className="line-clamp-2 min-h-[2.25rem] sm:min-h-[2.75rem] text-xs sm:text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[#F97316]">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto pt-2.5 sm:pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base sm:text-lg font-extrabold text-slate-900">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>

          <div className="mt-2.5 sm:mt-3.5 flex items-center gap-1.5 sm:gap-2">
            <Link
              to={`/product/${product.id}`}
              className="flex-1 rounded-lg sm:rounded-xl border border-slate-200 bg-white px-2 py-2 sm:px-3.5 sm:py-2.5 text-center text-[11px] sm:text-xs font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              View
            </Link>
            {showAddToCart && (
              <button
                type="button"
                onClick={() => addToCart(product, 1)}
                className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#F97316] text-white transition hover:bg-orange-600 cursor-pointer"
                aria-label={`Add ${product.title} to cart`}
                title="Add to Cart"
              >
                <FiShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
