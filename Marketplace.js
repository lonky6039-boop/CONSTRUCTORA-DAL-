const profesionales = [];

export function registrarProfesional(data) {
  profesionales.push(data);
}

export function buscarProfesionales(rubro) {
  return profesionales.filter(p => p.rubro === rubro);
}
