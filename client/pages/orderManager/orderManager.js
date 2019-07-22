Page({
  data:{
    startTime: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
    stopTime: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
    number: ["30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"],
    weekdays:["周一","周二","周三","周四","周五"],
    index: 0

  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: e.detail.value
    })
  },

 click: function(e){
   console.log("click",e);
   wx.navigateTo({
     url: '/pages/coachCourse/coachCourse',
   })
 }
})