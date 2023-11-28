import {ACTIVOS_CONSTANTS, PASIVOS_CONSTANTS} from '../../constants/balance/Balance'

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