import * as axios from 'axios'
// 区分测试环境和线上环境的接口地址，就需要在plugins文件中对axios进行编写
let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

export default axios.create(options)
