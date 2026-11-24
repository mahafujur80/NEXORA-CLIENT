import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

