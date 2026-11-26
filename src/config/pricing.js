// Fuente única de precios publicados (MXN). Cambiar aquí y se actualiza en todo el sitio.
export const PRICING = {
  web: 8500,
  system: 25000,
  supportWeb: 1500,
  supportSystemFrom: 3000,
  supportSystemTo: 4500,
}

const fmt = (n) => `$${n.toLocaleString("en-US")}`

export const price = {
  web: fmt(PRICING.web),
  system: fmt(PRICING.system),
  supportWeb: fmt(PRICING.supportWeb),
  supportSystemFrom: fmt(PRICING.supportSystemFrom),
  supportSystemTo: fmt(PRICING.supportSystemTo),
}
