import { MessageCircle, Users, ArrowRight, Hash } from 'lucide-react';

export default function DiscordCTA() {
  return (
    <section id="discord" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12 lg:p-16">
          {/* Glow */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-vanta-600/25 blur-[100px] animate-pulse-glow" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[100px] animate-pulse-glow" />
          <div className="absolute inset-0 grid-noise opacity-40" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-vanta-400/25 bg-vanta-500/10 px-4 py-1.5 text-xs font-semibold text-vanta-200">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
                Online now &mdash; 4,200+ members
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Need help? Join our{' '}
                <span className="text-gradient">Discord</span>
              </h2>
              <p className="mt-4 text-zinc-300">
                Our support team is online around the clock. Get instant answers,
                exclusive deals, and be the first to know when new products drop.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { icon: Users, label: '4,200+ members' },
                  { icon: MessageCircle, label: '24/7 support' },
                  { icon: Hash, label: 'Exclusive drops' },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 text-sm text-zinc-400"
                  >
                    <f.icon className="h-4 w-4 text-vanta-300" />
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#discord"
              className="btn-primary group h-14 px-8 text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Join Discord
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
