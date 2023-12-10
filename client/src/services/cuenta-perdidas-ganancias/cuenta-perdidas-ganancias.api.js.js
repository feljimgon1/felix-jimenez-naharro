import cuentaPerdidasGananciasToServer from "../helpers/toServer/cuentaPerdidasGananciasToServer";

export const fetchCuentaPerdidasGanancias = async () => {
  var response = undefined
  var token = JSON.parse(localStorage.getItem('user'))?.token
  const requestOptions = {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  };
  await fetch(`${process.env.REACT_APP_BACKEND_URL}cuenta-perdidas-ganancias/my-cuenta-perdidas-ganancias`, requestOptions)
    .then(res => res.json())
    .then(data => {
      response = data
    })
  return response
}

export const updateCuentaPerdidasGanancias = async (cuentaPerdidasGanancias, updatedCuentaPerdidasGanancias) => {
  var response = undefined
  var token = JSON.parse(localStorage.getItem('user'))?.token
  var parsedCuentaPerdidasGanancias = cuentaPerdidasGananciasToServer(cuentaPerdidasGanancias, updatedCuentaPerdidasGanancias)
  const requestOptions = {
    method: 'PUT',
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parsedCuentaPerdidasGanancias)
  };
  await fetch(`${process.env.REACT_APP_BACKEND_URL}cuenta-perdidas-ganancias/my-cuenta-perdidas-ganancias`, requestOptions)
    .then(res => res.json())
    .then(data => {
      response = data
    })
  return response
}