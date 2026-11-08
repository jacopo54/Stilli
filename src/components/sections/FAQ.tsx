import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How fast is delivery?',
    a: 'The vast majority of orders are auto-delivered to your inbox within 1-5 minutes. A small number of premium items may take up to 30 minutes during peak hours — you will always see the estimated delivery time before checkout.',
  },
  {
    q: 'Are the products legitimate?',
    a: 'Every product we sell is sourced through official channels and verified before listing. We back every order with a satisfaction guarantee — if your key or account does not work, we replace it or refund you in full.',
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'We accept all major credit and debit cards, PayPal, Apple Pay, Google Pay, and a range of regional methods. Crypto is also supported for select regions. All transactions are encrypted end-to-end.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Yes. If a product is faulty or undelivered and we cannot resolve it within 24 hours, you receive a full refund. Because digital goods cannot be "returned," change-of-mind refunds are handled case-by-case in our Discord.',
  },
  {
    q: 'Do you offer subscriptions or bundles?',
    a: 'Absolutely. Our VANTA All-Access Bundle combines the most popular services into one monthly plan, and VANTA Elite Lifetime gives you every product we offer — refreshed monthly — for life.',
  },
  {
    q: 'How do I get support?',
    a: 'The fastest way is our Discord server — staff are online 24/7. You can also reach us through the contact form in the footer. Most questions are answered within a few minutes.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal rounded-2xl glass transition-all duration-300 hover:border-vanta-400/25">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-white">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-vanta-300 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-400 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <span className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.3em] text-vanta-300/80">
            <HelpCircle className="h-4 w-4" />
            Got questions?
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Frequently asked
          </h2>
          <p className="mt-4 text-zinc-400">
            Everything you need to know before you buy. Still stuck? Ping us in
            Discord.
          </p>
        </div>

        <div className="reveal mt-12 space-y-4">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
