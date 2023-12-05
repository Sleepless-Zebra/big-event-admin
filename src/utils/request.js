import axios from 'axios'
import { useUserStore } from '@/stores'
import router from '@/router'
const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 100000
})

instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    if (res.data.code === 0) {
      return res
    }
    // TODO 4. 摘取核心响应数据
    ElMessage({ message: res.data.message || '服务异常' })
    return Promise.reject(res.data)
  },
  (err) => {
    //特殊情况发生错误
    ElMessage({ message: err.response.data.message || '服务异常' })
    console.log(err)
    // TODO 5. 处理401错误
    if (err.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
