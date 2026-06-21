export interface StellarAsset {
  code: string;
  issuer: string | null;
  name: string;
  decimals: number;
  domain: string | null;
}

// XLM is the native asset — no issuer
const SUPPORTED_ASSETS: StellarAsset[] = [
  {
    code: "XLM",
    issuer: null,
    name: "Stellar Lumens",
    decimals: 7,
    domain: "stellar.org",
  },
];

export function listAssets(query?: string): StellarAsset[] {
  if (!query) return SUPPORTED_ASSETS;
  const q = query.toLowerCase();
  return SUPPORTED_ASSETS.filter(
    (a) => a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q),
  );
}
