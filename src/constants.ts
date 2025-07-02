import * as path from 'path'
import * as os from 'os'

export const GLOBAL_CONF_PATH = path.join(os.homedir(), '.diva.json')

export let BASE_API_URL = 'https://apihub.cloudiva.net/fa/api/v1/'
if (process.env.DIVA_API_URL) {
  BASE_API_URL = process.env.DIVA_API_URL
}
