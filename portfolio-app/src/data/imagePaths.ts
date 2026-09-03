const base = import.meta.env.BASE_URL;

export function assetUrl(path: string): string {
  return `${base}${path}`;
}

const projectHeroes: Record<string, string> = {
  'terez-cafe': 'assets/terez_cafe_hero.png',
  'abd-al-razaq-olive-oil': 'assets/olive_oil_hero.png',
  'sarouja-revitalization': 'assets/sarouja_souq_after.png',
};

const fallbackHero =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe';

export function getProjectImage(id: string, width = 600): string {
  const local = projectHeroes[id];
  if (local) return assetUrl(local);
  return `${fallbackHero}?q=80&w=${width}&auto=format&fit=crop`;
}

export const saroujaBefore = assetUrl('assets/sarouja_souq_before.png');
export const saroujaAfter = assetUrl('assets/sarouja_souq_after.png');
