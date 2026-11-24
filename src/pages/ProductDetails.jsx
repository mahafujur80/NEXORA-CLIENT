import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
  FiStar,
  FiTruck,
} from 'react-icons/fi';
import { useProduct } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error, refetch } = useProduct(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    if (!product) return;
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {loading && <Loading message="Loading product details..." />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && product && (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex items-center justify-center rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[420px] w-full object-contain"
            />
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col justify-center">
            <span className="inline-block w-fit rounded-lg bg-orange-50 px-3 py-1 text-xs font-bold capitalize tracking-wide text-[#F97316]">
              {product.category === 'jewelery' ? 'Jewelry' : product.category}
            </span>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700">
                <FiStar className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>{product.rating?.rate ?? '4.5'}</span>
              </div>
              <span className="text-sm text-slate-500">
                {product.rating?.count ?? 0} customer reviews
              </span>
            </div>

            <div className="mt-6 border-y border-slate-100 py-5">
              <span className="text-3xl font-extrabold text-slate-900">
                ${Number(product.price).toFixed(2)}
              </span>
              <p className="mt-1 text-xs font-medium text-emerald-600">
                In stock and ready to ship
              </p>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="mt-8">
              <label className="block text-xs font-bold tracking-wider text-slate-500 uppercase">
                Quantity
              </label>
              <div className="mt-2.5 inline-flex items-center rounded-xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={handleDecrease}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 items-center justify-center text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                >
                  <FiMinus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-bold text-slate-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 items-center justify-center text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                >
                  <FiPlus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 cursor-pointer"
              >
                <FiShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600 cursor-pointer"
              >
                <FiShoppingBag className="h-4 w-4" />
                Buy Now
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                <FiTruck className="h-4 w-4 shrink-0 text-[#F97316]" />
                Free shipping on orders over $50
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                <FiShield className="h-4 w-4 shrink-0 text-[#F97316]" />
                30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

