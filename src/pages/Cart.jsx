import { Link } from 'react-router';
import toast from 'react-hot-toast';
import {
  FiArrowLeft,
  FiCheckCircle,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const {
    cartItems,
    totalItems,
    subtotal,
    shipping,
    total,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    toast.success('Checkout preview: No payment is processed in this frontend demo.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200/80 bg-slate-50/70 p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
            <FiShoppingBag className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-2xl font-extrabold text-slate-900">
            Your cart is empty
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Looks like you haven&apos;t added anything to your NEXORA cart yet.
          </p>
          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F97316]"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
            NEXORA Bag
          </p>
          <h1 className="mt-1.5 text-3xl font-extrabold tracking-tight text-slate-900">
            Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </h1>
        </div>
        <button
          type="button"
          onClick={() => {
            clearCart();
            toast.success('Cart cleared');
          }}
          className="w-fit text-xs font-semibold text-slate-500 transition hover:text-red-600 cursor-pointer"
        >
          Clear Cart
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 sm:flex-row sm:items-center"
            >
              <Link
                to={`/product/${item.id}`}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold capitalize text-[#F97316]">
                  {item.category === 'jewelery' ? 'Jewelry' : item.category}
                </p>
                <Link
                  to={`/product/${item.id}`}
                  className="mt-1 block truncate text-sm font-bold text-slate-900 hover:text-[#F97316]"
                >
                  {item.title}
                </Link>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  ${Number(item.price).toFixed(2)} each
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label={`Decrease quantity of ${item.title}`}
                    className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:text-slate-900 cursor-pointer"
                  >
                    <FiMinus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-slate-900">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label={`Increase quantity of ${item.title}`}
                    className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:text-slate-900 cursor-pointer"
                  >
                    <FiPlus className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="w-20 text-right">
                  <p className="text-sm font-extrabold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.title} from cart`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600 cursor-pointer"
                >
                  <FiTrash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-[#F97316]"
            >
              <FiArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-8">
            <h2 className="text-lg font-extrabold text-slate-900">Order Summary</h2>

            <div className="mt-6 space-y-3 border-b border-slate-200/80 pb-5 text-sm">
              <div className="flex items-center justify-between text-slate-600">
                <span>Items ({totalItems})</span>
                <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-semibold text-slate-900">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-slate-500">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping.
                </p>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">Total</span>
              <span className="text-2xl font-extrabold text-slate-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-6 w-full rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600 cursor-pointer"
            >
              Proceed to Checkout
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <FiCheckCircle className="h-3.5 w-3.5 text-emerald-600" />
              UI Preview — No real payment is charged
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

