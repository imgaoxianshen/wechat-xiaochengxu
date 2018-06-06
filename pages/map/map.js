// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[
      { id: 1, latitude: 30.25961, longitude: 120.13026, title: "你华盛顿",}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        that.setData({
          latitude : res.latitude,
          longitude : res.longitude,
          speed : res.speed,
          accuracy : res.accuracy
        })
              
      }
    })
  },
  chooseMap:function(){
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          markers: that.data.markers.concat({ id: 2, latitude: res.latitude, longitude: res.longitude, title: res.title})
        })
      },
    });
  },
  
})