import ProductCard from './ProductCard';

export default function ProductGrid({ products, showAddToCart = true }) {
  return (
    <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showAddToCart={showAddToCart}
        />
      ))}
    </div>
  );
}
