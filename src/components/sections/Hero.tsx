import { ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Orders delivered' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '24/7', label: 'Support active' },
  { value: '5min', label: 'Avg. delivery' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center overflow-hidden pt-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-noise opacity-60" />
      <div className="absolute -left-40 top-20 h-[36rem] w-[36rem] rounded-full bg-vanta-700/20 blur-[140px] animate-float-slow" />
      <div className="absolute -right-32 top-40 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/15 blur-[130px] animate-float-slower" />
      <div className="absolute bottom-0 left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-vanta-600/10 blur-[120px]" />

      {/* Orbit ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-vanta-500/10 animate-spin-slow" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-vanta-500/[0.07]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        {/* Left */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-vanta-400/25 bg-vanta-500/10 px-4 py-1.5 text-xs font-semibold text-vanta-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            Live &mdash; instant delivery 24/7
          </div>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your Digital{' '}
            <span className="text-gradient-shimmer">Experience</span>
            <br />
            Starts Here.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            VANTA SUPPLY is the premium marketplace for streaming, Discord
            Nitro, gaming, software and elite digital goods &mdash; delivered
            instantly to your inbox.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#products" className="btn-primary h-12 px-7 text-base">
              Explore the Store
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#categories" className="btn-ghost h-12 px-7 text-base">
              Browse Categories
            </a>
          </div>

          {/* Feature pills */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: Zap, text: 'Instant auto-delivery' },
              { icon: ShieldCheck, text: 'Secure & encrypted' },
              { icon: Star, text: 'Trusted by 50,000+' },
            ].map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 text-sm text-zinc-400"
              >
                <f.icon className="h-4 w-4 text-vanta-300" />
                {f.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating glass showcase */}
        <div className="reveal relative hidden lg:block" data-reveal-delay="150">
          <div className="relative mx-auto max-w-md">
            {/* Main glass card */}
            <div className="glass-strong rounded-3xl p-6 shadow-glow-lg animate-float-slow">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-vanta-500/20 px-3 py-1 text-xs font-bold text-vanta-200">
                  BEST SELLER
                </span>
                <span className="flex items-center gap-1 text-sm text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  4.9
                </span>
              </div>
              <div className="mt-4 h-44 overflow-hidden rounded-2xl border border-vanta-400/15">
                <img
                  src="https://cdn.simpleicons.org/netflix"
                  alt="Netflix logo"
                  onError={(event) => {
                    event.currentTarget.src = '/images/22F7DC17-3C13-4361-A936-E4F0EA7212FE.png';
                  }}
                  className="h-full w-full bg-gradient-to-br from-red-950/40 to-ink-900 object-contain p-14"
                  loading="eager"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                Netflix Premium 4K
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Ultra HD on 4 screens, ad-free.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-white">
                    €2,04
                  </span>
                </div>
                <span className="btn-primary h-9 px-4 text-sm">Buy</span>
              </div>
            </div>

            {/* Floating mini card */}
            <div
              className="glass absolute -bottom-10 -left-12 w-56 rounded-2xl p-4 shadow-glow animate-float-slower"
              data-reveal-delay="300"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-vanta-500/20 text-vanta-200">
                  <Zap className="h-4 w-4" fill="currentColor" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Delivery in 5 min
                  </p>
                  <p className="text-[11px] text-zinc-500">Auto-fulfilled</p>
                </div>
              </div>
            </div>

            {/* Floating rating chip */}
            <div
              className="glass absolute -right-8 top-6 rounded-2xl px-4 py-3 shadow-glow-sm animate-float-slow"
              data-reveal-delay="450"
            >
              <p className="font-display text-2xl font-bold text-gradient">
                50K+
              </p>
              <p className="text-[11px] text-zinc-400">Happy customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="reveal mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-5 text-center transition-all hover:border-vanta-400/30 hover:shadow-glow-sm"
            >
              <p className="font-display text-3xl font-extrabold text-gradient">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
