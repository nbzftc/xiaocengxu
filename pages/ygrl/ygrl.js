// ygrl.js
var cd=20,kd=10,gd=10,sl=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cd:20,
    // kd:10,
    // gd:10,
    zsl:"等待计算..."
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  change1:function(e){
 
    cd = e.detail.value
    sl = (parseInt(cd) * parseInt(kd) * parseInt(gd))/1000
    //console.log(sl)
    this.setData({
      zsl:sl+"升"
    })
  },
  change2: function (e) {
    kd = e.detail.value
    sl = (parseInt(cd) * parseInt(kd) * parseInt(gd)) / 1000
    //console.log(sl)
    this.setData({
      zsl: sl + "升"
    })
  },
  change3: function (e) {
    gd = e.detail.value
    sl = (parseInt(cd) * parseInt(kd) * parseInt(gd)) / 1000
    //console.log(sl)
    this.setData({
      zsl: sl + "升"
    })
    }


})