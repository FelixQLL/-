Page({
  click1: function(e){
    console.log('-------------click', e);
    wx.navigateTo({
      url: '/pages/orderManager/orderManager',
    })
  },
  click2: function (e) {
    console.log('-------------click', e);
    wx.navigateTo({
      url: '/pages/whiteManager/whiteManager',
    })
  }
})