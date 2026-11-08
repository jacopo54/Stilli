export type CategoryId = 'streaming' | 'software' | 'premium' | 'gaming';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  icon: string;
  accent: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  image: string;
  badge?: string;
  rating: number;
  sales: number;
  stock: number;
}

export const categories: Category[] = [
  { id: 'streaming', name: 'Streaming', tagline: 'Entertainment, musica e sport', icon: 'PlayCircle', accent: 'from-vanta-400 to-fuchsia-500' },
  { id: 'software', name: 'AI & Software', tagline: 'Tool premium per creare di più', icon: 'Code2', accent: 'from-vanta-300 to-vanta-500' },
  { id: 'premium', name: 'VPN & Premium', tagline: 'Privacy, social e vantaggi esclusivi', icon: 'Crown', accent: 'from-amber-400 to-vanta-500' },
  { id: 'gaming', name: 'Gaming', tagline: 'Account, codici e vantaggi in-game', icon: 'Gamepad2', accent: 'from-fuchsia-500 to-vanta-500' },
];

const icon = (name: string): string => `https://cdn.simpleicons.org/${name}`;

const item = (
  id: string,
  name: string,
  category: CategoryId,
  duration: string,
  stock: number,
  imageName: string,
  price: number,
  description: string,
  originalPrice?: number,
  badge?: string,
): Product => ({
  id,
  name,
  category,
  duration,
  stock,
  image: icon(imageName),
  price: price <= 5 ? Number((price + 1).toFixed(2)) : price,
  description,
  originalPrice: undefined,
  badge: stock === 0 ? 'Esaurito' : badge,
  rating: 4.8,
  sales: Math.max(120, 18000 - stock * 19),
});

export const products: Product[] = [
  item('netflix-lifetime', 'Netflix [Lifetime Keys]', 'streaming', 'Lifetime', 880, 'netflix', 1.04, 'Accesso streaming premium con catalogo completo e qualità Ultra HD.', 59.99, 'Best Seller'),
  item('disney-lifetime', 'Disney+ [Lifetime]', 'streaming', 'Lifetime', 0, 'disneyplus', 1.14, 'Disney, Pixar, Marvel, Star Wars e National Geographic in un unico accesso.', 49.99),
  item('crunchyroll-lifetime', 'Crunchyroll Accounts [Lifetime]', 'streaming', 'Lifetime', 98, 'crunchyroll', 1.10, 'Anime in simulcast, sottotitoli premium e streaming senza pubblicità.', 39.99),
  item('paramount-lifetime', 'Paramount+ [Lifetime]', 'streaming', 'Lifetime', 29, 'paramountplus', 1.05, 'Serie, film, sport e show Paramount+ con accesso a vita.', 39.99),
  item('hbo-lifetime', 'HBO Max [Lifetime]', 'streaming', 'Lifetime', 0, 'hbo', 1.12, 'Le migliori serie HBO e un catalogo cinema premium sempre disponibile.', 44.99),
  item('dazn-lifetime', 'DAZN [Lifetime]', 'streaming', 'Lifetime', 6, 'dazn', 1.08, 'Sport live e on demand con accesso premium a vita.', 69.99),
  item('plextv-lifetime', 'PlexTV [Lifetime]', 'streaming', 'Lifetime', 19, 'plex', 1.06, 'Libreria streaming e canali live in un solo account.', 34.99),
  item('prime-fa', 'Prime Video FA', 'streaming', 'Instant', 2, 'primevideo', 2.43, 'Film, serie e produzioni originali Prime Video.', 29.99),
  item('molotov-lifetime', 'Molotov.TV [Lifetime]', 'streaming', 'Lifetime', 5, 'molotov', 1.06, 'Televisione live e replay con accesso premium.', 29.99),
  item('iptv-lifetime', 'IPTV [Lifetime]', 'streaming', 'Lifetime', 0, 'iptv', 1.10, 'Accesso IPTV premium con canali internazionali.', 49.99),
  item('nba-lifetime', 'NBA [Lifetime]', 'streaming', 'Lifetime', 0, 'nba', 1.08, 'Basket live, replay e contenuti esclusivi NBA.', 59.99),
  item('youtube-fa', 'YouTube Premium FA [1 Month]', 'streaming', '1 Month', 0, 'youtube', 1.89, 'Video senza pubblicità, riproduzione in background e YouTube Music.', 13.99),
  item('spotify-fa', 'Spotify FA', 'streaming', 'Instant', 9, 'spotify', 1.77, 'Musica senza pubblicità, download offline e skip illimitati.', 12.99, 'Popular'),
  item('deezer-lifetime', 'Deezer [Lifetime]', 'streaming', 'Lifetime', 126, 'deezer', 1.02, 'Streaming musicale premium con audio ad alta qualità.', 39.99),

  item('chatgpt-fa', 'ChatGPT FA [1 Month]', 'software', '1 Month', 0, 'openai', 2.16, 'Accesso premium agli strumenti AI per produttività e creatività.', 24.99),
  item('capcut-lifetime', 'CapCut Pro [Lifetime]', 'software', 'Lifetime', 10, 'capcut', 1.04, 'Editing video professionale con effetti, template e strumenti AI.', 79.99, 'Limited'),
  item('lovable-lifetime', 'Lovable [Lifetime]', 'software', 'Lifetime', 0, 'lovable', 1.12, 'Crea prodotti digitali più velocemente con il tuo workspace premium.', 99.99),
  item('elevenlabs-lifetime', 'ElevenLabs [Lifetime]', 'software', 'Lifetime', 11, 'elevenlabs', 1.12, 'Voice AI naturale per progetti, video e contenuti digitali.', 99.99),
  item('kling-lifetime', 'Kling AI [Lifetime]', 'software', 'Lifetime', 0, 'klingai', 1.10, 'Generazione video AI per trasformare idee in contenuti.', 89.99),
  item('filmora-lifetime', 'Wondershare Filmora [Lifetime]', 'software', 'Lifetime', 74, 'filmora', 1.01, 'Editor video completo con effetti, audio e strumenti creativi.', 119.99),
  item('adobe-express', 'Adobe Express Activation Links [12 Months]', 'software', '12 Months', 3, 'adobe', 1.35, 'Template, grafiche e contenuti social con Adobe Express.', 59.99),
  item('duolingo-lifetime', 'Duolingo [Lifetime]', 'software', 'Lifetime', 75, 'duolingo', 1.53, 'Impara nuove lingue senza pubblicità con il percorso premium.', 89.99),

  item('expressvpn-lifetime', 'ExpressVPN [Lifetime]', 'premium', 'Lifetime', 8, 'expressvpn', 1.04, 'Privacy online, velocità elevata e server globali.', 149.99, 'Best Value'),
  item('tunnelbear-lifetime', 'Tunnel Bear VPN [Lifetime]', 'premium', 'Lifetime', 0, 'tunnelbear', 1.08, 'Navigazione privata con interfaccia semplice e intuitiva.', 99.99),
  item('mullvad-lifetime', 'Mullvad VPN [Lifetime]', 'premium', 'Lifetime', 0, 'mullvad', 1.98, 'VPN orientata alla privacy con protezione avanzata.', 119.99),
  item('discord-deco', 'Discord Random Deco', 'premium', 'Instant', 0, 'discord', 2.45, 'Decora il tuo profilo Discord con un elemento casuale esclusivo.', 9.99),
  item('cyberghost-lifetime', 'Cyberghost VPN [Lifetime]', 'premium', 'Lifetime', 0, 'cyberghost', 1.10, 'Protezione della connessione e accesso privato a internet.', 129.99),
  item('formula1-lifetime', 'Formula 1 TV [Lifetime]', 'premium', 'Lifetime', 32, 'formula1', 1.07, 'Segui gare, replay e contenuti esclusivi della Formula 1.', 79.99),
  item('instagram-fa', 'Instagram FA [Lifetime]', 'premium', 'Lifetime', 2, 'instagram', 1.10, 'Account Instagram pronto all’uso con accesso immediato.', 39.99),
  item('veepee-fr', 'Veepee FR [Lifetime]', 'premium', 'Lifetime', 0, 'veepee', 1.07, 'Accesso a offerte e vendite private Veepee France.', 29.99),
  item('discord-boosts', 'Discord Server Boosts', 'premium', 'Instant', 7, 'discord', 3.63, 'Boost istantanei per potenziare il tuo server Discord.', 19.99, 'Popular'),

  item('steam-lifetime', 'Steam [Lifetime]', 'gaming', 'Lifetime', 402, 'steam', 1.71, 'Account gaming con accesso alla libreria Steam indicata.', 49.99, 'Best Seller'),
  item('fortnite-lifetime', 'Fortnite Accounts [Lifetime]', 'gaming', 'Lifetime', 26, 'fortnite', 34.59, 'Account Fortnite pronto all’uso con contenuti selezionati.', 59.99),
  item('valorant-nfa', 'Valorant NFA [Lifetime]', 'gaming', 'Lifetime', 3, 'valorant', 1.83, 'Account Valorant NFA per iniziare subito a giocare.', 39.99),
  item('minecraft-lifetime', 'Minecraft [Lifetime]', 'gaming', 'Lifetime', 0, 'minecraft', 5.07, 'Accesso Minecraft per costruire, esplorare e giocare online.', 49.99),
  item('rockstar-codes', 'Rockstar Activation Codes', 'gaming', 'Instant', 0, 'rockstargames', 1.18, 'Codici di attivazione Rockstar per la tua libreria gaming.', 59.99),
  item('fivem-ready', 'FiveM Ready FA Accounts', 'gaming', 'Lifetime', 89, 'fivem', 1.04, 'Account ready per entrare subito nelle community FiveM.', 34.99),
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

export const featuredProductIds = [
  'netflix-lifetime',
  'steam-lifetime',
  'expressvpn-lifetime',
  'capcut-lifetime',
  'spotify-fa',
  'discord-boosts',
];

export function getFeatured(): Product[] {
  return featuredProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}
