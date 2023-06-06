export function generarID() {
  const random = Math.floor(Math.random()).toString(36).substring()
  const fecha = Date.now().toString(36)
  return random + fecha
}
