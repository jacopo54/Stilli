import {
  PlayCircle,
  MessageCircle,
  Gamepad2,
  Code2,
  Crown,
  ArrowRight,
} from 'lucide-react';
import type { CategoryId, Category } from '@/data/products';
import { categories } from '@/data/products';

const iconMap: Record<string, typeof PlayCircle> = {
  PlayCircle,
  MessageCircle,
  Gamepad2,
  Code2,
  Crown,
};

interface CategoryGridProps {
  active: CategoryId | 'all';
  onSelect: (id: CategoryId | 'all') => void;
}

export default function CategoryGrid({ active, onSelect }: CategoryGridProps) {
  return (
    <section id="categories" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-vanta-300/80">
            Browse by category
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Find what you need
          </h2>
          <p className="mt-4 text-zinc-400">
            Five curated categories. Hundreds of digital goods. All delivered
            instantly.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat: Category, i) => {
            const Icon = iconMap[cat.icon] ?? PlayCircle;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                data-reveal-delay={String(i * 80)}
                className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 ${
                  isActive
                    ? 'glass-strong border-vanta-400/50 shadow-glow'
                    : 'glass hover:border-vanta-400/30 hover:shadow-glow-sm'
                }`}
              >
                <div
                  className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${cat.accent} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40`}
                />
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-xl border border-vanta-400/30 bg-gradient-to-br ${cat.accent} bg-opacity-20`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-bold text-white">
                  {cat.name}
                </h3>
                <p className="relative mt-1 text-sm text-zinc-400">
                  {cat.tagline}
                </p>
                <span className="relative mt-4 flex items-center gap-1.5 text-xs font-semibold text-vanta-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Browse
                  <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
