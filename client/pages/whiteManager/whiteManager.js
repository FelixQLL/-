Page({
  data: {
    listData: [
      { "text": "张三", "time": "2018.5.17" },
      { "text": "张三", "time": "2018.5.17" },
      { "text": "张三", "time": "2018.5.17" },
      { "text": "张三", "time": "2018.5.17" }
    ],

  },

  onLoad: function (options) {

  },
  
  click: function (e) {
    console.log("click", e);
    wx.navigateTo({
      url: '/pages/whiteRequest/whiteRequest',
    })
  }
})