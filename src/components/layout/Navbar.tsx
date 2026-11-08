import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Categories', href: '#categories' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? 'glass-strong shadow-glow-sm' : 'border border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-vanta-400/40 bg-ink-900 shadow-glow-sm">
              <img src="/images/22F7DC17-3C13-4361-A936-E4F0EA7212FE.png" alt="Vanta Supply" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold tracking-tight text-white">VANTA</span>
              <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-vanta-300/80">SUPPLY</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-vanta-400 to-fuchsia-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onCartClick}
              className="group relative flex h-10 items-center gap-2 rounded-xl border border-vanta-400/20 bg-vanta-500/5 px-3 text-sm font-semibold text-zinc-200 transition-all hover:border-vanta-400/50 hover:bg-vanta-500/15"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4 text-vanta-300" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-vanta-500 px-1.5 text-[11px] font-bold text-white shadow-glow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="#products"
              className="btn-primary hidden h-10 px-5 text-sm sm:inline-flex"
            >
              Shop Now
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-vanta-400/20 bg-vanta-500/5 text-zinc-200 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-strong rounded-2xl p-3">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-vanta-500/10 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="btn-primary mt-1 h-11 px-5 text-sm"
              >
                Shop Now
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
