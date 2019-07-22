Page({
  data: {
    items: [
      { name: '张三', value: '2018.05.17' },
      //checked为truetrue，所以该项默认选中  
      { name: '李四', value: '2018.04.15' },
      { name: 'BRA', value: '2018.05.30' },
      // disabled为truetrue，所以该项不能被点击，checked为truetrue，默认选中，但是不能点击  
      { name: 'JPN', value: '2018.05.21' },
      { name: 'ENG', value: '2018.05.26' },
      { name: 'TUR', value: '2018.05.02' },
    ]
  },
  // checkbox点击的时候会执行这个方法  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  click: function (e) {
    console.log("click", e);
  }  
})