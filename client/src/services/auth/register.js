export const register = async (user) => {
  var response = undefined
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };
  await fetch(`${process.env.REACT_APP_BACKEND_URL}register`, requestOptions)
    .then(res=>res.json())
    .then(data=>{
      response = data
    })
  return response
}