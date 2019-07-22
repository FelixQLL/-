Page({
  data: {
    height: 20,
    focus: false
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: e.detail.value
    })
  },

  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: ''
    })
  },

  img: function(e){
    console.log('-------------click', e);
    wx.navigateTo({
      url: '/pages/coachCourse/coachCourse'
    })
  },

  click: function(e){
    console.log('-----------click',e);
    wx.navigateTo({
      url: '/pages/setClass/setClass'
    })
  }
})  