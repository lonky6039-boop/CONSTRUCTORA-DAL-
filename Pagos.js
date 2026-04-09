export function procesarPago(usuario, plan) {
  return {
    estado: "aprobado",
    plan: plan,
    usuario: usuario
  };
}
