import { Link } from 'react-router';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showAddToCart = true }) {
  const { addToCart } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
      <Link
        to={`/product/${product.id}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden bg-white p-6"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold capitalize text-slate-600">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <FiStar className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-slate-800">
            {product.rating?.rate ?? '4.5'}
          </span>
          <span>({product.rating?.count ?? 0} reviews)</span>
        </div>

        <Link to={`/product/${product.id}`} className="mt-2">
          <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[#F97316]">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold text-slate-900">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>

          <div className="mt-3.5 flex items-center gap-2">
            <Link
              to={`/product/${product.id}`}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-center text-xs font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              View Details
            </Link>
            {showAddToCart && (
              <button
                type="button"
                onClick={() => addToCart(product, 1)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F97316] text-white transition hover:bg-orange-600 cursor-pointer"
                aria-label={`Add ${product.title} to cart`}
                title="Add to Cart"
              >
                <FiShoppingCart className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

