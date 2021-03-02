import ky from "ky"

const api = {
  index (dataSrc = "https://jsonplaceholder.typicode.com/photos") {
    return ky.get(dataSrc).json()
  }
}

export default api;