import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FiSearch, FiX } from 'react-icons/fi';
import ProductGrid from '../components/ProductGrid';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useProducts } from '../hooks/useProducts';

export default function Shop() {
  const { products, categories, loading, error, refetch } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('default');

  // Sync if URL query params change via Navbar search or Category links
  const urlCategory = searchParams.get('category') || 'all';
  const urlSearch = searchParams.get('search') || '';
  const activeCategory = urlCategory !== 'all' ? urlCategory : selectedCategory;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const next = new URLSearchParams(searchParams);
    if (category === 'all') {
      next.delete('category');
    } else {
      next.set('category', category);
    }
    setSearchParams(next, { replace: true });
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    const next = new URLSearchParams(searchParams);
    if (value.trim()) {
      next.set('search', value);
    } else {
      next.delete('search');
    }
    setSearchParams(next, { replace: true });
  };

  const effectiveSearch = urlSearch || searchQuery;

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('default');
    setSearchParams({}, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const query = effectiveSearch.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        !query || product.title.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'title-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return sorted;
  }, [products, activeCategory, effectiveSearch, sortBy]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="border-b border-slate-200/80 pb-8">
        <p className="text-xs font-bold tracking-wider text-[#F97316] uppercase">
          NEXORA Catalog
        </p>
        <h1 className="mt-1.5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          All Products
        </h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Browse our complete collection of curated essentials across fashion, electronics, and jewelry.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <FiSearch className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={effectiveSearch}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search products by title..."
            aria-label="Search products by title"
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-9 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F97316] focus:outline-none"
          />
          {effectiveSearch && (
            <button
              type="button"
              onClick={() => handleSearchChange('')}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={activeCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            aria-label="Filter by category"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium capitalize text-slate-700 focus:border-[#F97316] focus:outline-none cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="capitalize">
                {cat === 'jewelery' ? 'Jewelry' : cat}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 focus:border-[#F97316] focus:outline-none cursor-pointer"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Alphabetical: A to Z</option>
            <option value="title-desc">Alphabetical: Z to A</option>
          </select>

          {(activeCategory !== 'all' || effectiveSearch || sortBy !== 'default') && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      {!loading && !error && (
        <p className="mt-6 text-xs font-medium text-slate-500">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      )}

      {/* Product Grid / States */}
      <div className="mt-6">
        {loading && <Loading message="Fetching products from store..." />}
        {error && <ErrorMessage message={error} onRetry={refetch} />}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-6 py-16 text-center">
            <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
            <p className="mt-2 text-sm text-slate-600">
              Try adjusting your search term or selecting a different category.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F97316] cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}
        {!loading && !error && filteredProducts.length > 0 && (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </div>
  );
}

