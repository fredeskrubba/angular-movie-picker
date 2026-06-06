const STREAMING_PROVIDER_ICONS: Record<string, string> = {
  'Netflix': 'netflix-logo',
  'Disney Plus': 'disney-plus-logo',
  'Amazon Prime Video': 'prime-logo',
  'HBO Max': 'hbo-logo.svg',
};

export const getProviderIcon = (providerName: string): string | null => {
  return STREAMING_PROVIDER_ICONS[providerName] ?? null;
};
