import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/photos',
  headers: {
    'Accept-Version': 'v1',
    Authorization: 'Client-ID d05276a7fa9e7c52f7f6fe99c865d43cd9c80a6d408d23a02dbb5742ea6dc293'
  }
})
