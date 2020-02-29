//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    datas:[
      { name: '皮肤科', urlImage:'/images/home_doctor/physical_signs.png'},
      { name: '普内科', urlImage: '/images/home_doctor/physical_signs.png' },
      { name: '普外科', urlImage: '/images/home_doctor/physical_signs.png' },
      { name: '中医科', urlImage: '/images/home_doctor/physical_signs.png' },
      { name: '泌尿科', urlImage: '/images/home_doctor/physical_signs.png' },
      { name: '消化内科', urlImage: '/images/home_doctor/physical_signs.png' },
      { name: '骨科', urlImage: '/images/home_doctor/physical_signs.png' },
      { name: '更多', urlImage: '/images/home_doctor/physical_signs.png' },


    ]
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
