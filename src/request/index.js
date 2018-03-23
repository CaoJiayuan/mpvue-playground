import Fly from 'flyio/dist/umd/wx.umd.min'

const Request = {
  install(Vue){
    Vue.prototype.$request = new Fly()
  }
}

export default Request
