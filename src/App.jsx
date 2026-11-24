import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '12px',
              background: '#0F172A',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: '500',
            },
          }}
        />
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}
