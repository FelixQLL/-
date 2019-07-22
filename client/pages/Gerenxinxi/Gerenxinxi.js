Page({
  onTouch: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../BangDing/BangDing?id=' + e.currentTarget.dataset.id,
      success: function (e) {
        console.log(e)
      }
    })
  },
  ontouch: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../Mycoach/Mycoach?id=' + e.currentTarget.dataset.id,
      success: function (e) {
        console.log(e)
      }
    })
  },
  data: {
    dates: '2018-01-01'
  },
    bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  click: function(e){
    console.log("click", e);
    wx.navigateTo({
      url: '/pages/coachCourse/coachCourse',
    })
  }
})