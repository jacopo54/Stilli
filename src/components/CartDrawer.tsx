import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { formatPrice, type Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onUpdateQty,
  onRemove,
}: CartDrawerProps) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ink-900 shadow-glow-xl transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-vanta-500/50 via-vanta-500/20 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-vanta-400/15 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-vanta-500/15 text-vanta-300">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Your Cart
              </h3>
              <p className="text-xs text-zinc-500">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-vanta-400/20 text-zinc-300 transition-colors hover:bg-vanta-500/10 hover:text-white"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-vanta-400/20 bg-vanta-500/5">
                <ShoppingBag className="h-7 w-7 text-vanta-400/60" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  Your cart is empty
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Add some products to get started.
                </p>
              </div>
              <button onClick={onClose} className="btn-ghost mt-2 h-10 px-5 text-sm">
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-2xl border border-vanta-400/10 bg-ink-850 p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="truncate text-sm font-semibold text-white">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="flex-shrink-0 text-zinc-500 transition-colors hover:text-red-400"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-zinc-500">{item.duration}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-vanta-400/20 text-zinc-300 hover:bg-vanta-500/10"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-vanta-400/20 text-zinc-300 hover:bg-vanta-500/10"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-display text-sm font-bold text-vanta-200">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-vanta-400/15 px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Subtotal</span>
              <span className="font-display text-xl font-bold text-white">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              Taxes calculated at checkout. Instant delivery after payment.
            </p>
            <button className="btn-primary mt-4 h-12 w-full text-base">
              Checkout
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
