import parseToServer from "../parsers/tables/clientToServer";

export default function activosAndPasivosToServer(activos, pasivos, updatedActivos, updatedPasivos) {
  var res = {}
  for (let i = 0; i < activos.length; i++) {
    if (!activos[i].composed) {
      if (updatedActivos.includes(activos[i].name)) {
        let parsedName = parseToServer(activos[i].name)
        res[parsedName] = activos[i].value
      }
    }
  }
  for (let i = 0; i < pasivos.length; i++) {
    if (!pasivos[i].composed) {
      if (updatedPasivos.includes(pasivos[i]?.name)) {
        if (pasivos[i].name === 'Deuda nueva') {
          res['otrosPasivosFijos'] = pasivos[i].value
        } else if (pasivos[i].name === 'Deuda antigua') {
          res['acreedoresLP'] = pasivos[i].value
        }
        else {
          let parsedName = parseToServer(pasivos[i].name)
          res[parsedName] = pasivos[i].value
        }
      }
    }
  }
  return res
}