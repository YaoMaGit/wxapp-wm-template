// pages/order/releaseComment/releaseComment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 5,
    serviceCount: 4,
    tasteCunt: 3,
    speedCount: 3,
    isAnonymous: false,
  },
  // 切换服务分数
  switchService: function (e) {
    let serviceCount = e.currentTarget.dataset.index;
    this.setData({
      serviceCount,
    })
  },
  // 切换口感分数
  switchTaste: function (e) {
    let tasteCunt = e.currentTarget.dataset.index;
    this.setData({
      tasteCunt,
    })
  },
  // 切换配送速度分数
  switchSpeed: function (e) {
    let speedCount = e.currentTarget.dataset.index;
    this.setData({
      speedCount,
    })
  },
  handleSave: function () {
    wx.switchTab({
      url: "../index/index",
    })
  },
  switchAnonymous: function () {
    this.setData({
      isAnonymous: !this.data.isAnonymous,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})