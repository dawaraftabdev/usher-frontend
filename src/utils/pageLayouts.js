import axios from 'axios'
export const fetchPageLayout = async (url, setState) => {
  try {
    const res = await axios.get(url)
    setState(res.data)
  } catch (error) {
    console.log('error:-', error)
  }
}
