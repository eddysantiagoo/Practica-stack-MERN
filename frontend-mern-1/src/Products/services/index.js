import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getProducts(params) {
  try{
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'GET'
    })

    return response;
  } catch (e){
    console.log(e)
  }
}