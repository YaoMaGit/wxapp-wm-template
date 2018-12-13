// pages/menber/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 1,
    list: [
      { icon: '../../../assets/icon/icon-money-1.png' },
      { icon: '../../../assets/icon/icon-money-2.png' },
      { icon: '../../../assets/icon/icon-money-3.png' },
    ],
    moneyList: [
      { money: '¥100.00', tips: '送免费喝茶劵' },
      { money: '¥200.00', tips: '送12杯红糖水' },
      { money: '¥500.00', tips: '送免费喝茶劵' },
      { tips: '自定义' },
    ],
    activeMoneyIndex: 0,
  },
  switchBox: function (e) {
    let activeIndex = e.currentTarget.dataset.index;
    this.setData({
      activeIndex,
    })
  },
  switchMoney: function (e) {
    let activeMoneyIndex = e.currentTarget.dataset.index;
    this.setData({
      activeMoneyIndex,
    })
  },
  open_getpay:function(){
    wx.navigateTo({
      url: '../getpay/getpay'
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