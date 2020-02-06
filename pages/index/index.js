//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  }, 
  /**
   * 跳转体征详情页函数
   */
  onSigns: function(event){
     wx.navigateTo({
       url: '/pages/signs/signs'
     })
  }
  
})
