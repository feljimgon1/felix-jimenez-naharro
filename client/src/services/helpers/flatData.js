import { ACTIVOS_CONSTANTS, PASIVOS_CONSTANTS } from '../../constants/balance/Balance'
import { CUENTA_PERDIDAS_GANANCIAS_CONSTANTS } from '../../constants/cuenta-perdidas-ganancias/CuentaPerdidasGanancias'
import { ESTRATEGIA_MERCADO_CONSTANTS } from '../../constants/estrategia-mercado/EstrategiaMercado'

const checkComposed = (composed) => {
  return (
    composed === 'activoNoCorriente' ||
    composed === 'activoCorriente'
  )
}

const parseActivo = (oldName) => {
  let keys = Object.keys(ACTIVOS_CONSTANTS[0])
  let values = Object.values(ACTIVOS_CONSTANTS[0])
  let res = undefined
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === oldName) {
      res = values[i]
    }
  }
  return res
}

const parsePasivo = (oldName) => {
  let keys = Object.keys(PASIVOS_CONSTANTS[0])
  let values = Object.values(PASIVOS_CONSTANTS[0])
  let res = undefined
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === oldName) {
      res = values[i]
    }
  }
  return res
}

const parseCuentaPerdidasGanancias = (oldName) => {
  let keys = Object.keys(CUENTA_PERDIDAS_GANANCIAS_CONSTANTS[0])
  let values = Object.values(CUENTA_PERDIDAS_GANANCIAS_CONSTANTS[0])
  let res = undefined
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === oldName) {
      res = values[i]
    }
  }
  return res
}

const parseEstrategiaMercado = (oldName) => {
  let keys = Object.keys(ESTRATEGIA_MERCADO_CONSTANTS[0])
  let values = Object.values(ESTRATEGIA_MERCADO_CONSTANTS[0])
  let res = undefined
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === oldName) {
      res = values[i]
    }
  }
  return res
}

export function flatActivos(balance) {
  var res = []
  for (const key in balance.balance) {
    if (key === 'inmovilizadoInmaterial' ||
      key === 'inmovilizadoMaterial' ||
      key === 'otrosActivosFijos' ||
      key === 'existencias' ||
      key === 'deudores' ||
      key === 'otrosActivosLiquidos') {
      let newName = parseActivo(key)
      let composed = checkComposed(key)
      let newValue = balance.balance[key]
      res.push({ name: newName, value: newValue, composed: composed })
    }
    if (res.length === 6) {
      var activoNoCorriente = {
        name: parseActivo('activoNoCorriente'),
        value: 0,
        composed: true
      }
      var activoCorriente = {
        name: parseActivo('activoCorriente'),
        value: 0,
        composed: true
      }
      res.splice(0, 0, activoNoCorriente)
      res.splice(4, 0, activoCorriente)
      res[0].value = res[1].value + res[2].value + res[3].value
      res[4].value = res[5].value + res[6].value + res[7].value
    }
  }
  return res
}

export function flatPasivos(balance) {
  var res = []
  for (const key in balance.balance) {
    if (key === 'capitalSuscrito' ||
      key === 'otrosFondosPropios' ||
      key === 'otrosPasivosFijos' ||
      key === 'acreedoresLP' ||
      key === 'deudaAntigua' ||
      key === 'deudaNueva' ||
      key === 'provisiones' ||
      key === 'deudasFinancieras' ||
      key === 'acreedoresComerciales' ||
      key === 'otrosPasivosLiquidos') {
      let newName = parsePasivo(key)
      let composed = checkComposed(key)
      let value = balance.balance[key]
      res.push({ name: newName, value: value, composed: composed })
    }
    if (res.length === 8) {
      var fondosPropios = {
        name: parsePasivo('fondosPropios'),
        value: 0,
        composed: true
      }
      var pasivoNoCorriente = {
        name: parsePasivo('pasivoNoCorriente'),
        value: 0,
        composed: true
      }
      var pasivoCorriente = {
        name: parsePasivo('pasivoCorriente'),
        value: 0,
        composed: true
      }
      res.splice(0, 0, fondosPropios)
      res[0].value = res[1].value + res[2].value
      res.splice(3, 0, pasivoNoCorriente)
      res[3].value = res[4].value + res[5].value + res[6].value
      res.splice(7, 0, pasivoCorriente)
      res[7].value = res[8].value + res[9].value + res[10].value
    }
  }
  return res
}

export function flatCuentaPerdidasGanancias(cuentaPerdidasGanancias) {
  var res = []
  for (const key in cuentaPerdidasGanancias.cuentaPerdidasGanancias) {
    if (key === 'cat' ||
      key === 'consumoMercaderiasMaterias' ||
      key === 'gastoPersonal' ||
      key === 'trppi' ||
      key === 'otrosIngresosExplotacion' ||
      key === 'otrosGastosExplotacion' ||
      key === 'ingresosFinancieros' ||
      key === 'importeNetoCifraVentas' ||
      key === 'gastosFinancieros' ||
      key === 'impuestoSobreSociedades' ||
      key === 'ingresosExtraordinarios' ||
      key === 'gastosExtraordinarios') {
      let newName = parseCuentaPerdidasGanancias(key)
      let composed = checkComposed(key)
      let value = cuentaPerdidasGanancias.cuentaPerdidasGanancias[key]
      res.push({ name: newName, value: value, composed: composed })
    }
    if (res.length === 12) {
      var ingresosExplotacion = {
        name: parseCuentaPerdidasGanancias('ingresosExplotacion'),
        value: 0,
        composed: true
      }
      var costesExplotacion = {
        name: parseCuentaPerdidasGanancias('costesExplotacion'),
        value: 0,
        composed: true
      }
      var EBITDA = {
        name: parseCuentaPerdidasGanancias('ebitda'),
        value: 0,
        composed: true
      }
      var BAIT = {
        name: parseCuentaPerdidasGanancias('bait'),
        value: 0,
        composed: true
      }
      var resultadoFinanciero = {
        name: parseCuentaPerdidasGanancias('resultadoFinanciero'),
        value: 0,
        composed: true
      }
      var resultadoOrdinarioAntesDeImpuestos = {
        name: parseCuentaPerdidasGanancias('resultadoOrdinarioAntesDeImpuestos'),
        value: 0,
        composed: true
      }
      var resultadoActividadesOrdinarias = {
        name: parseCuentaPerdidasGanancias('resultadoActividadesOrdinarias'),
        value: 0,
        composed: true
      }
      var resultadoActividadesExtraordinarias = {
        name: parseCuentaPerdidasGanancias('resultadoActividadesExtraordinarias'),
        value: 0,
        composed: true
      }
      var resultadoEjercicio = {
        name: parseCuentaPerdidasGanancias('resultadoEjercicio'),
        value: 0,
        composed: true
      }
      res.splice(0, 0, ingresosExplotacion)
      res.splice(4, 0, costesExplotacion)
      res.splice(8, 0, EBITDA)
      res.splice(10, 0, BAIT)
      res.splice(13, 0, resultadoFinanciero)
      res.splice(14, 0, resultadoOrdinarioAntesDeImpuestos)
      res.splice(16, 0, resultadoActividadesOrdinarias)
      res.splice(20, 0, resultadoActividadesExtraordinarias)
      res.splice(21, 0, resultadoEjercicio)
      res[0].value = res[1].value + res[2].value + res[3].value
      res[4].value = res[5].value + res[6].value + res[7].value
      res[8].value = res[0].value - res[4].value
      res[10].value = res[8].value - res[9].value
      res[13].value = res[11].value - res[12].value
      res[14].value = res[10].value + res[13].value
      res[16].value = res[14].value - res[15].value
      res[19].value = res[17].value - res[18].value
      res[20].value = res[19].value + res[16].value
    }
  }
  return res
}

export function flatEstrategiaMercado(estrategiaMercado) {
  var res = []
  for (const key in estrategiaMercado.estrategiaMercado) {
    if (key === 'gastoEmpleado' ||
      key === 'numeroEmpleados' ||
      key === 'objetivoVentasAnyoCinco' ||
      key === 'ventasAlcanzadas' ||
      key === 'otrosGastosExplotacionPorVentas' ||
      key === 'aprovisionamientoPorVentas') {
      let newName = parseEstrategiaMercado(key)
      let composed = checkComposed(key)
      let value = estrategiaMercado.estrategiaMercado[key]
      res.push({ name: newName, value: value, composed: composed })
    }
  }
  return res
}
