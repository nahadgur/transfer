// components/SpokeHero.tsx
// Inline-SVG hero for blog spokes + guide hubs. No <img>, no file, no external
// host. The gradient hue is seeded by the hub slug, so every spoke under a hub
// shares a colour and different hubs differ. The SVG is decorative
// (aria-hidden); the page keeps the real <h1> (rendered sr-only by the caller).

const SITE_NAME = "Kenya's Transfer Hub";

// Dark base pairs, brand lime (#ccff00) accent. The hub hash picks a pair so
// hubs differ but stay on the dark/lime brand.
const PAIRS: [string, string][] = [
  ['#0a0f00', '#1f2c00'],
  ['#0d1400', '#2a3a00'],
  ['#060a00', '#243300'],
];
const ACCENT = '#ccff00';
const SUBTLE = '#c7d98a';

function hashIndex(s: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % mod;
}

// Balance a title across two lines by word count.
function twoLines(t: string): [string, string] {
  const w = t.trim().split(/\s+/);
  if (w.length < 3) return [t, ''];
  const cut = Math.ceil(w.length / 2);
  return [w.slice(0, cut).join(' '), w.slice(cut).join(' ')];
}

export function SpokeHero({
  title,
  hubName,
  hubSlug,
  readMins,
}: {
  title: string;
  hubName: string | null;
  hubSlug: string;
  readMins: number;
}) {
  const seed = hubSlug || title;
  const [d0, d1] = PAIRS[hashIndex(seed, PAIRS.length)];
  const [l1, l2] = twoLines(title);
  const eyebrow = `${SITE_NAME}${hubName ? ' · ' + hubName : ''}`;
  const gid = `sh-${hashIndex(seed, 99999)}`;
  const fs = Math.max(l1.length, l2.length) > 40 ? 28 : 34;

  return (
    <svg
      viewBox="0 0 1100 340"
      className="w-full h-auto block rounded-2xl border border-white/10"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={d0} />
          <stop offset="1" stopColor={d1} />
        </linearGradient>
      </defs>
      <rect width="1100" height="340" fill={`url(#${gid})`} />
      <g fill="none" stroke={ACCENT} strokeOpacity="0.16" strokeWidth="2"><circle cx="960" cy="170" r="70"/><circle cx="960" cy="170" r="120"/><circle cx="960" cy="170" r="170"/><circle cx="960" cy="170" r="220"/></g>
      <text x="60" y="150" fill={SUBTLE} fontSize="16" fontWeight="600">{eyebrow}</text>
      <text x="60" y="202" fill="#ffffff" fontSize={fs} fontWeight="800">{l1}</text>
      {l2 ? <text x="60" y={202 + fs + 8} fill="#ffffff" fontSize={fs} fontWeight="800">{l2}</text> : null}
      <text x="60" y={l2 ? 202 + (fs + 8) * 2 - 4 : 248} fill={ACCENT} fontSize="15">{readMins} min read</text>
    </svg>
  );
}
