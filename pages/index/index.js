//index.js

const api = require('../../utils/request.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  
  onLoad: function () {
    api.fetchRequest('today').then(function (res) {
      console.log(res);
    })
  }
  
})
