// pages/signs/signs.js
let ppp = [{ type: '填空1', value: 123 },
  { type: '填空2', value: 321 },
  { type: '填空3', value: 221 },
  { type: '填空4', value: 221 },
  { type: '填空5', value: 221 }]


Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    onInitChart(F2, config) {
      const chart = new F2.Chart(config);
      const data =ppp;
      chart.scale('value',{
        tickCount:5
      })
      chart.source(data);
      chart.interval().position('type*value').color('type');
      chart.legend(false)
      chart.render();
      // 注意：需要把chart return 出来
      return chart;
    }
  },
  /*
  自定义方法
  */ 
  bloodOxygen:function(){
    wx.navigateTo({
      url: '/pages/signs/bloodOxygen/bloodOxygen',
    })
  },
  bloodPress: function () {
    wx.navigateTo({
      url: '/pages/signs/bloodPress/bloodPress',
    })
  },
  heartRate: function () {
    wx.navigateTo({
      url: '/pages/signs/heartRate/heartRate',
    })
  },
  step: function () {
    wx.navigateTo({
      url: '/pages/signs/step/step',
    })
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

  }
})