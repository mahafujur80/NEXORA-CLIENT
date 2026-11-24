import { useCallback, useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/products';

let cachedProducts = null;
let cachedCategories = null;
let inFlightProductsPromise = null;

async function fetchJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

export function useProducts() {
  const [products, setProducts] = useState(cachedProducts || []);
  const [categories, setCategories] = useState(cachedCategories || []);
  const [loading, setLoading] = useState(!cachedProducts);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async (forceRefresh = false) => {
    if (cachedProducts && cachedCategories && !forceRefresh) {
      setProducts(cachedProducts);
      setCategories(cachedCategories);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (!inFlightProductsPromise || forceRefresh) {
        inFlightProductsPromise = Promise.all([
          fetchJson(BASE_URL),
          fetchJson(`${BASE_URL}/categories`),
        ]);
      }

      const [productsData, categoriesData] = await inFlightProductsPromise;
      cachedProducts = productsData;
      cachedCategories = categoriesData;

      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      inFlightProductsPromise = null;
      setError(err.message || 'Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts(false);
  }, [loadProducts]);

  return {
    products,
    categories,
    loading,
    error,
    refetch: () => loadProducts(true),
  };
}

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProduct = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    try {
      const data = await fetchJson(`${BASE_URL}/${id}`, controller.signal);
      setProduct(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Failed to load product details.');
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, [id]);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    async function run() {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const data = await fetchJson(`${BASE_URL}/${id}`, controller.signal);
        if (active) {
          setProduct(data);
        }
      } catch (err) {
        if (active && err.name !== 'AbortError') {
          setError(err.message || 'Failed to load product details.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    run();

    return () => {
      active = false;
      controller.abort();
    };
  }, [id]);

  return {
    product,
    loading,
    error,
    refetch: loadProduct,
  };
}

