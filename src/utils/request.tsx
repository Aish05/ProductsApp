import axios from "axios"
import Config from 'react-native-config'

export const request = ({ url, method, data }: { url: string, method: string, data: object }) => {
  return axios({
    url: `${url}`,
    method: method || 'get ',
    data
  });
}