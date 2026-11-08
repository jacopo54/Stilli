import { Star, Quote } from 'lucide-react';

interface Review {
  name: string;
  handle: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

const reviews: Review[] = [
  {
    name: 'Marcus Rivera',
    handle: '@marcusdev',
    avatar: 'https://images.pexels.com/photos/7858742/pexels-photo-7858742.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    text: 'Got my Netflix 4K in under 3 minutes. VANTA is the only place I buy digital goods now — clean, fast, and the prices are unbeatable.',
    product: 'Netflix Premium 4K',
  },
  {
    name: 'Aisha Khan',
    handle: '@aishaplays',
    avatar: 'https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    text: 'Discord Nitro full for half the retail price? It actually works. Support in the Discord server answered me in seconds.',
    product: 'Discord Nitro Full',
  },
  {
    name: 'Liam O\'Brien',
    handle: '@liamobx',
    avatar: 'https://images.pexels.com/photos/13071304/pexels-photo-13071304.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    text: 'The All-Access bundle is insane value. Netflix, Spotify, Game Pass and a VPN for less than I used to pay for Netflix alone.',
    product: 'VANTA All-Access Bundle',
  },
  {
    name: 'Sofia Marchetti',
    handle: '@sofi.codes',
    avatar: 'https://images.pexels.com/photos/9794458/pexels-photo-9794458.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    text: 'Adobe Creative Cloud at this price felt like a scam — it is not. My design workflow hasn\'t skipped a beat. Lifetime customer.',
    product: 'Adobe Creative Cloud',
  },
  {
    name: 'Devon Walker',
    handle: '@devonwlkr',
    avatar: 'https://images.pexels.com/photos/27424789/pexels-photo-27424789.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    text: 'Steam gift card arrived instantly, redeemed without a hitch. The checkout is buttery smooth and the site looks incredible.',
    product: 'Steam Gift Card $50',
  },
  {
    name: 'Yuki Tanaka',
    handle: '@yuki.exe',
    avatar: 'https://images.pexels.com/photos/7870815/pexels-photo-7870815.jpeg?auto=compress&cs=tinysrgb&h=120&w=120',
    rating: 5,
    text: 'VANTA VPN Lifetime for fifty bucks is the best purchase I made this year. Speeds are great and the UI is gorgeous.',
    product: 'VANTA VPN Lifetime',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24">
      <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-vanta-700/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-vanta-300/80">
            Loved by thousands
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What customers say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-zinc-400">
              4.9 / 5 from 12,000+ verified reviews
            </span>
          </div>
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.handle}
              className="reveal group relative flex flex-col rounded-2xl glass p-6 transition-all duration-500 hover:border-vanta-400/30 hover:shadow-glow-sm"
              data-reveal-delay={String((i % 3) * 100)}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-vanta-500/15" />
              <div className="flex gap-1">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-amber-400" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-vanta-400/10 pt-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-vanta-500/30"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-zinc-500">{r.handle}</p>
                </div>
                <span className="rounded-lg bg-vanta-500/10 px-2 py-1 text-[10px] font-semibold text-vanta-200">
                  {r.product}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
