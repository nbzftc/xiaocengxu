//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎您 ',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //console.log('onLoad')
    var that = this //把this对象复制到临时变量that
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){    
      //更新数据
      that.mytest()
      that.setData({
        userInfo:userInfo
      })
    })
  },
  mytest:function(){
    //console.log('cb-mytest-use this')
  },
  bindViewlist: function () {
    wx.navigateTo({
      url: '../ygrl/ygrl'
    })
  },
  ViewDSJS:function(){
    wx.navigateTo({
      url: '../dsjs/dsjs'
    }) 
  }
})
