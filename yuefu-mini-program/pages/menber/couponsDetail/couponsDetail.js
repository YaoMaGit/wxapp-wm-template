// pages/menber/couponsDetail/couponsDetail.js
var app = getApp();
var imageBaseUrl = app.globalData.imageBaseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageBaseUrl,
    list: [
      {
        name: '全场通用购物劵',
        typeText: '专用券',
        type: 0,
        status: 0,
      },
      {
        name: '专属优惠劵',
        typeText: '通用券',
        type: 1,
        status: 0,
      },
      {
        name: '全场通用购物劵',
        typeText: '专用券',
        type: 0,
        status: 1,
      },
      {
        name: '全场通用购物劵',
        typeText: '通用券',
        type: 2,
        status: 2,
      },
    ],
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