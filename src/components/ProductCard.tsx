import { useMemo } from 'react';
import { Star, Check, Clock, Plus, Sparkles, PackageCheck } from 'lucide-react';
import { formatPrice, type Product, type CategoryId } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
  index: number;
}

export default function ProductCard({ product, onAdd, index }: ProductCardProps) {
  const discount = useMemo(() => {
    if (!product.originalPrice) return 0;
    return Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
  }, [product.originalPrice, product.price]);

  return (
    <article
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-vanta-400/40 hover:shadow-glow"
      data-reveal-delay={String((index % 4) * 90)}
    >
      {/* Product logo */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-vanta-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_62%)]" />
        <img
          src={product.image}
          alt={`${product.name} logo`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = '/images/22F7DC17-3C13-4361-A936-E4F0EA7212FE.png';
          }}
          className="relative z-10 max-h-24 max-w-[58%] object-contain drop-shadow-[0_0_24px_rgba(196,163,255,0.35)] transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          {product.badge && (
            <span className="flex items-center gap-1 rounded-full bg-vanta-500/90 px-2.5 py-1 text-[11px] font-bold text-white shadow-glow-sm backdrop-blur">
              <Sparkles className="h-3 w-3" />
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
              -{discount}%
            </span>
          )}
        </div>

        {/* Duration */}
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-ink-900/80 px-2 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur">
          <Clock className="h-3 w-3 text-vanta-300" />
          {product.duration}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-vanta-300/80">
            {categoryName(product.category)}
          </span>
          <span className="flex items-center gap-1 text-xs text-amber-400">
            <Star className="h-3.5 w-3.5 fill-current" />
            {product.rating.toFixed(1)}
          </span>
        </div>

        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {product.description}
        </p>

        {/* Delivery line */}
        <div className="mt-4 flex items-center gap-2 text-xs">
          {product.stock > 0 ? (
            <>
              <PackageCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-300">{product.stock} disponibili</span>
            </>
          ) : (
            <>
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="text-red-300">Esaurito</span>
            </>
          )}
          <span className="mx-1 h-1 w-1 rounded-full bg-zinc-700" />
          <span className="text-zinc-500">Consegna istantanea</span>
        </div>

        {/* Price + action */}
        <div className="mt-4 flex items-center justify-between border-t border-vanta-400/10 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-extrabold text-white">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-zinc-600 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            onClick={() => onAdd(product)}
            disabled={product.stock === 0}
            className="group/btn relative flex h-10 items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-br from-vanta-500 to-vanta-700 px-4 text-sm font-semibold text-white transition-all hover:shadow-glow active:scale-95 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:from-zinc-700 disabled:to-zinc-800 disabled:text-zinc-500 disabled:shadow-none"
          >
            {product.stock > 0 ? <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" /> : null}
            {product.stock > 0 ? 'Acquista' : 'Esaurito'}
          </button>
        </div>
      </div>
    </article>
  );
}

function categoryName(id: CategoryId): string {
  const map: Record<CategoryId, string> = {
    streaming: 'Streaming',
    software: 'AI & Software',
    gaming: 'Gaming',
    premium: 'VPN & Premium',
  };
  return map[id];
}
