export function sanitizeStr(str: string) {
  const clean = !str || typeof str !== "string" ? "" : str.trim().normalize();
  return clean;
}
