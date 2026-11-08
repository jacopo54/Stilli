import { useMemo, useState } from 'react';
import { SlidersHorizontal, Flame } from 'lucide-react';
import type { CategoryId, Product } from '@/data/products';
import { products, getFeatured } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface ProductGridProps {
  onAdd: (p: Product) => void;
  activeCategory: CategoryId | 'all';
  setActiveCategory: (id: CategoryId | 'all') => void;
}

const filters: { id: CategoryId | 'all'; label: string }[] = [
  { id: 'all', label: 'Tutti i prodotti' },
  { id: 'streaming', label: 'Streaming' },
  { id: 'software', label: 'AI & Software' },
  { id: 'premium', label: 'VPN & Premium' },
  { id: 'gaming', label: 'Gaming' },
];

export default function ProductGrid({
  onAdd,
  activeCategory,
  setActiveCategory,
}: ProductGridProps) {
  const [sort, setSort] = useState<'popular' | 'price-low' | 'price-high'>(
    'popular'
  );

  const visible = useMemo(() => {
    let list =
      activeCategory === 'all'
        ? products
        : products.filter((p) => p.category === activeCategory);

    if (sort === 'price-low') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-high') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'popular') list = [...list].sort((a, b) => b.sales - a.sales);
    return list;
  }, [activeCategory, sort]);

  const featured = getFeatured();

  return (
    <section id="products" className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 h-96 -translate-y-1/2 bg-gradient-to-b from-vanta-700/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-vanta-300/80">
              The marketplace
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Prodotti in evidenza
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Prodotti selezionati e disponibili subito. Ogni acquisto viene consegnato
              automaticamente in pochi minuti.
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 rounded-xl glass px-3 py-2">
            <SlidersHorizontal className="h-4 w-4 text-vanta-300" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="cursor-pointer bg-transparent text-sm font-medium text-zinc-200 outline-none [&>option]:bg-ink-800"
            >
              <option value="popular">Più popolari</option>
              <option value="price-low">Prezzo: crescente</option>
              <option value="price-high">Prezzo: decrescente</option>
            </select>
          </div>
        </div>

        {/* Featured strip */}
        {activeCategory === 'all' && (
          <div className="reveal mt-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-vanta-200">
              <Flame className="h-4 w-4 text-vanta-300" fill="currentColor" />
              In tendenza
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featured.slice(0, 4).map((p, i) => (
                <ProductCard key={p.id} product={p} onAdd={onAdd} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Filter pills */}
        <div className="reveal mt-12 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveCategory(f.id)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                activeCategory === f.id
                  ? 'bg-gradient-to-br from-vanta-500 to-vanta-700 text-white shadow-glow-sm'
                  : 'glass text-zinc-300 hover:border-vanta-400/30 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p, i) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <div className="mt-12 rounded-2xl glass p-12 text-center text-zinc-400">
            Nessun prodotto in questa categoria.
          </div>
        )}
      </div>
    </section>
  );
}
