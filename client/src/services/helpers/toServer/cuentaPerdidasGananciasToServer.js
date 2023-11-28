import parseToServer from "../parsers/tables/clientToServer";

export default function cuentaPerdidasGananciasToServer(cuentaPerdidasGanancias, updatedCuentaPerdidasGanancias) {
  var res = {}
  for (let i = 0; i < cuentaPerdidasGanancias.length; i++) {
    if (!cuentaPerdidasGanancias[i].composed) {
      if (updatedCuentaPerdidasGanancias.includes(cuentaPerdidasGanancias[i].name)) {
        let parsedName = parseToServer(cuentaPerdidasGanancias[i].name)
        console.log(parsedName);
        if (parsedName === 'importeNetoCifraDeVentas') parsedName = 'importeNetoCifraVentas'
        if (parsedName === 'otrosIngresosDeExplotacion') parsedName = 'otrosIngresosExplotacion'
        if (parsedName === 'tRPPI') parsedName = 'trppi'
        if (parsedName === 'consumoDeMercaderiasYMaterias') parsedName = 'consumoMercaderiasMaterias'
        if (parsedName === 'gastoDePersonal') parsedName = 'gastoPersonal'
        if (parsedName === 'otrosGastosDeExplotacion') parsedName = 'otrosGastosExplotacion'
        if (parsedName === 'cAT') parsedName = 'cat'
        res[parsedName] = cuentaPerdidasGanancias[i].value
      }
    }
  }
  return res
}