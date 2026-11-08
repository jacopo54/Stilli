import { Instagram, Twitter, Send } from 'lucide-react';

const cols = [
  {
    title: 'Marketplace',
    links: ['Streaming', 'Discord Nitro', 'Gaming', 'Software', 'Premium'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Reviews', 'FAQ', 'Terms of Service', 'Privacy Policy'],
  },
  {
    title: 'Support',
    links: ['Discord Server', 'Live Chat', 'Refund Policy', 'Track Order', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-vanta-400/10 bg-ink-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vanta-500/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-vanta-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-vanta-400/40 bg-ink-900 shadow-glow-sm">
                <img src="/images/22F7DC17-3C13-4361-A936-E4F0EA7212FE.png" alt="Vanta Supply" className="h-full w-full object-cover" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold tracking-tight text-white">VANTA</span>
                <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-vanta-300/80">SUPPLY</span>
              </div>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
              Your digital experience starts here. Premium digital goods
              delivered instantly, backed by 24/7 support and a community of
              thousands.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Send, label: 'Discord' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#discord"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-vanta-400/20 bg-vanta-500/5 text-zinc-300 transition-all hover:border-vanta-400/50 hover:bg-vanta-500/15 hover:text-vanta-200 hover:shadow-glow-sm"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#products"
                      className="text-sm text-zinc-400 transition-colors hover:text-vanta-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-vanta-400/10 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} VANTA SUPPLY. All rights reserved.
          </p>
          <p className="font-display text-xs font-medium tracking-[0.25em] text-vanta-300/70">
            YOUR DIGITAL EXPERIENCE STARTS HERE
          </p>
        </div>
      </div>
    </footer>
  );
}
