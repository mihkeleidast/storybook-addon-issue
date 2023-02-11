export function managerEntries(entry = []) {
  return [...entry, require.resolve('./register.tsx')]; // 👈 Addon implementation
}
