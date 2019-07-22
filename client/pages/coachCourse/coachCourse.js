Page({
  data: {
    listData: [
      { "code": "7", "text": "剩5人"},
      { "code": "8", "text": "剩6人"},
      { "code": "9", "text": "剩5人"},
      { "code": "10", "text": "剩6人"},
      { "code": "11", "text": "剩5人"},
      { "code": "12", "text": "剩5人"},
      { "code": "13", "text": "剩5人"},
      { "code": "14", "text": "剩6人"},
      { "code": "15", "text": "剩5人"},
      { "code": "16", "text": "剩6人"}
    ],
    date:[
    {"text": "今天"},
    {"text": "明天"}
    ],
    indicatorDots: true,
    autoplay: false
  },
  onLoad: function () {
    console.log('onLoad')
  },
  click: function (e) {
    console.log('-------------click', e);
    wx.navigateTo({
      url: '/pages/coachOrder/coachOrder',
    })
  }
})