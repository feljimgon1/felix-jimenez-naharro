import parseToServer from "../parsers/tables/clientToServer";

export default function cuentaPerdidasGananciasToServer(estrategiaMercado, updatedEstrategiaMercado) {
  var res = {}
  for (let i = 0; i < estrategiaMercado.length; i++) {
    if (!estrategiaMercado[i].composed) {
      if (updatedEstrategiaMercado.includes(estrategiaMercado[i].name)) {
        let parsedName = parseToServer(estrategiaMercado[i].name)
        if (parsedName === 'importeNetoCifraDeVentas') parsedName = 'importeNetoCifraVentas'
        if (parsedName === 'otrosIngresosDeExplotacion') parsedName = 'otrosIngresosExplotacion'
        if (parsedName === 'tRPPI') parsedName = 'trppi'
        if (parsedName === 'consumoDeMercaderiasYMaterias') parsedName = 'consumoMercaderiasMaterias'
        if (parsedName === 'gastoDePersonal') parsedName = 'gastoPersonal'
        if (parsedName === 'otrosGastosDeExplotacion') parsedName = 'otrosGastosExplotacion'
        if (parsedName === 'cAT') parsedName = 'cat'
        res[parsedName] = estrategiaMercado[i].value
      }
    }
  }
  return res
}