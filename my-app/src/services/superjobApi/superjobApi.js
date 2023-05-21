import axios from "axios";

const BASE_URL = "https://startup-summer-2023-proxy.onrender.com/2.0/"
const PROXY_X_SECRET_KEY = "GEU4nvd3rej*jeh.eqp"

const DEFAULT_LOGIN = "sergei.stralenia@gmail.com"
const DEFAULT_PASSWORD = "paralect123"
const DEFAULT_CLIENT_ID = "2356"
const DEFAULT_CLIENT_SECRET = "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'x-secret-key': PROXY_X_SECRET_KEY},
});

export const superjobApi = {
  authorizeByPassword: async (
    login = DEFAULT_LOGIN,
    password = DEFAULT_PASSWORD,
    client_id = DEFAULT_CLIENT_ID,
    client_secret = DEFAULT_CLIENT_SECRET
  ) => {
    try {
      const response = await instance.get(`oauth2/password/?login=${login}&password=${password}&client_id=${client_id}&client_secret=${client_secret}`)
      return response.data;
    } catch (err) {
      console.log('Error', err)
    }
  },
}
