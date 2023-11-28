import activosAndPasivosToServer from "../helpers/toServer/balanceToServer";

export const fetchBalance = async () => {
  var response = undefined
  var token = JSON.parse(localStorage.getItem('user'))?.token
  const requestOptions = {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  };
  await fetch(`${process.env.REACT_APP_BACKEND_URL}balance/my-balance`, requestOptions)
    .then(res => res.json())
    .then(data => {
      response = data
    })
  return response
}

export const updateBalance = async (activos, pasivos, updatedActivos, updatedPasivos) => {
  var response = undefined
  var token = JSON.parse(localStorage.getItem('user'))?.token
  var parsedBalance = activosAndPasivosToServer(activos, pasivos, updatedActivos, updatedPasivos)
  const requestOptions = {
    method: 'PUT',
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parsedBalance)
  };
  await fetch(`${process.env.REACT_APP_BACKEND_URL}balance/my-balance`, requestOptions)
    .then(res => res.json())
    .then(data => {
      response = data
    })
  return response
}