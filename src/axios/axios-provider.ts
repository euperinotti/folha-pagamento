import axios from 'axios'

const URL = 'your_api_url/'

export const getAll = async () => {
  try {
    const res = await axios.get(`${URL}route`)

    return res.data
  } catch (e) {
    console.log(e)
  }
}
