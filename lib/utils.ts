export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getSourceName(source: string | { name: string }): string {
  return typeof source === 'string' ? source : source?.name || 'Unknown';
}
