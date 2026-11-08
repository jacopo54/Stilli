import { useCallback, useMemo, useState } from 'react';
import type { CategoryId, Product } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import CategoryGrid from '@/components/sections/CategoryGrid';
import ProductGrid from '@/components/sections/ProductGrid';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import DiscordCTA from '@/components/sections/DiscordCTA';
import CartDrawer, { type CartItem } from '@/components/CartDrawer';

export default function App() {
  useScrollReveal();

  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = useMemo(
    () => cart.reduce((s, i) => s + i.quantity, 0),
    [cart]
  );

  const addToCart = useCallback((p: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) {
        return prev.map((i) =>
          i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...p, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const handleCategorySelect = useCallback((id: CategoryId | 'all') => {
    setActiveCategory(id);
    // smooth-scroll to products when a category is picked
    requestAnimationFrame(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-ink-950">
      {/* Ambient page glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-vanta-700/[0.08] blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

        <main>
          <Hero />
          <CategoryGrid
            active={activeCategory}
            onSelect={handleCategorySelect}
          />
          <ProductGrid
            onAdd={addToCart}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <Reviews />
          <FAQ />
          <DiscordCTA />
        </main>

        <Footer />
      </div>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={updateQty}
        onRemove={removeItem}
      />
    </div>
  );
}
