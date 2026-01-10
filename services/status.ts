import api from "./api";

export default async function statusApi() {
  
  return api.get('status')
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => {
      console.error(error)
      throw error
    })

}