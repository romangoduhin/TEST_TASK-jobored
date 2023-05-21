import axios from "axios";
import {showError} from "@helpers";

const BASE_URL = "https://startup-summer-proxy-production.up.railway.app/2.0/"
const PROXY_X_SECRET_KEY = "GEU4nvd3rej*jeh.eqp"

const DEFAULT_LOGIN = "sergei.stralenia@gmail.com"
const DEFAULT_PASSWORD = "paralect123"
const DEFAULT_CLIENT_ID = "2356"
const DEFAULT_CLIENT_SECRET = "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"

const DEFAULT_PAGE = "1"
const DEFAULT_COUNT = "4"

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-secret-key': PROXY_X_SECRET_KEY,
    "X-Api-App-Id": DEFAULT_CLIENT_SECRET
  },
});

export const superjobApi = {
  authorizeByPassword: async (
    login = DEFAULT_LOGIN,
    password = DEFAULT_PASSWORD,
    client_id = DEFAULT_CLIENT_ID,
    client_secret = DEFAULT_CLIENT_SECRET
  ) => {
    try {
      const {data} = await instance.get(`oauth2/password/?login=${login}&password=${password}&client_id=${client_id}&client_secret=${client_secret}`)
      return data;
    } catch (err) {
      showError(err)
    }
  },
  getVacancies: async (page = DEFAULT_PAGE, count = DEFAULT_COUNT) => {
    try {
      const {data} = await instance.get(`vacancies/?page=${page}&count=${count}`)
      return data
    } catch (err) {
      showError(err)
    }
  },
}
