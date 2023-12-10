import estrategiaMercadoToServer from "../helpers/toServer/estrategiaMercadoToServer";

export const fetchEstrategiaMercado = async () => {
  var response = undefined
  var token = JSON.parse(localStorage.getItem('user'))?.token
  const requestOptions = {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  };
  await fetch(`${process.env.REACT_APP_BACKEND_URL}estrategia-mercado/my-estrategia-mercado`, requestOptions)
    .then(res => res.json())
    .then(data => {
      response = data
    })
  return response
}

export const updateEstrategiaMercado = async (estrategiaMercado, updatedEstrategiaMercado) => {
  var response = undefined
  var token = JSON.parse(localStorage.getItem('user'))?.token
  var parsedEstrategiaMercado = estrategiaMercadoToServer(estrategiaMercado, updatedEstrategiaMercado)
  const requestOptions = {
    method: 'PUT',
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parsedEstrategiaMercado)
  };
  await fetch(`${process.env.REACT_APP_BACKEND_URL}estrategia-mercado/my-estrategia-mercado`, requestOptions)
    .then(res => res.json())
    .then(data => {
      response = data
    })
  return response
}