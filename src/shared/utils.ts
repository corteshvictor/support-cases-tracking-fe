export function removeFalsyValues(
  obj: Record<string, unknown>
): Record<string, string> {
  const cleanedObj: Record<string, string> = {};

  for (const key in obj) {
    if (obj[key]) {
      cleanedObj[key] = String(obj[key])
    }
  }

  return cleanedObj;
}
