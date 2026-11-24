import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext(null);
const CART_STORAGE_KEY = 'nexora_cart';

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    if (!product || quantity < 1) return;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity,
        },
      ];
    });

    toast.success(`Added "${product.title.slice(0, 28)}${product.title.length > 28 ? '...' : ''}" to cart`);
  };

  const updateQuantity = (productId, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: nextQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success('Item removed from cart');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const summary = useMemo(() => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = subtotal === 0 || subtotal >= 50 ? 0 : 5.99;
    const total = subtotal + shipping;

    return {
      totalItems,
      subtotal,
      shipping,
      total,
    };
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    ...summary,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

