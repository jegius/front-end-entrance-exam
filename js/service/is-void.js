export function isVoid(value) {
  return value === undefined || value === null || value === "";
}

export function isNotVoid(value) {
  return value !== undefined && value !== null && value !== "";
}
