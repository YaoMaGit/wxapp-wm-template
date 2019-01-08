// pages/orderMeal/settlement/settlement.js
var app = getApp();
var imageBaseUrl = app.globalData.imageBaseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageBaseUrl,
    tabs: ['外卖配送', '到店自取'],
    tabActive: 0,
    list: [0, 1, 2],
    mianfeiList: [0, 1],
    isShowTime: false,
    dateActive: 0,
    timeActive: 0,
    date: [
      {
        date: '今天（周三）',
        list: [
          { time: '立即送出', price: '  免配送费' },
          { time: '19:20', price: '2.5元配送费' },
          { time: '19:30', price: '2.5元配送费' },
          { time: '19:50', price: '2.5元配送费' },
          { time: '20:10', price: '2.5元配送费' },
          { time: '20:20', price: '2.5元配送费' },
        ],
      },
      {
        date: '明天（周四）',
        list: [
          { time: '立即送出', price: '  免配送费' },
          { time: '19:20', price: '2.5元配送费' },
          { time: '19:30', price: '2.5元配送费' },
          { time: '19:50', price: '2.5元配送费' },
          { time: '20:10', price: '2.5元配送费' },
          { time: '20:20', price: '2.5元配送费' },
        ],
      },
    ],
    isShowGifts: false,
    giftsList: [0 ,1 , 2, 3, 4],
    giftsActive: 0,
    isPaySuccess: false,
    isShowPayList: false,
    payList: [
      { icon: '../../../assets/icon/icon-df-pay.png', name: '找人代付', isSelect: true },
      { icon: '../../../assets/icon/icon-wx-pay.png', name: '微信支付', isSelect: false },
      { icon: '../../../assets/icon/icon-yue-pay.png', name: '余额代付', isSelect: false },
    ],
    payActive: 0,
  },
  switchTabs: function (e) {
    let tabActive = e.currentTarget.dataset.index;
    this.setData({
      tabActive,
    })
  },
  // 选中配送日
  bindDate: function (e) {
    let dateActive = e.currentTarget.dataset.index;
    this.setData({
      dateActive,
    })
  },
  // 选中配送时间
  bindTime: function (e) {
    let timeActive = e.currentTarget.dataset.index;
    this.setData({
      timeActive,
    })
    this.isShowTimePopup();
  },
  // 显示/隐藏日期选中框
  isShowTimePopup: function () {
    this.setData({
      isShowTime: !this.data.isShowTime,
    })
  },
  // 阻止弹窗内容冒泡
  catchtap: function () {

  },
  // 选中赠品
  onChangeGifts: function (e) {
    let giftsActive = e.currentTarget.dataset.index;
    this.setData({
      giftsActive,
    })
  },
  // 显示/隐藏赠品弹窗
  isShowGiftsPopup: function () {
    // this.setData({
    //   isShowGifts: !this.data.isShowGifts,
    // })
  },
  // 切换支付方式
  swtchPay: function (e) {
    let payActive = e.currentTarget.dataset.index;
    this.setData({
      payActive,
    })
    this.isShowPayListPopup();
  },
  // 显示/隐藏支付方式弹窗
  isShowPayListPopup: function () {
    this.setData({
      isShowPayList: !this.data.isShowPayList,
    })
  },
  // 确认支付
  handlePay: function () {
    this.isShowPayPopup();
  },
  // 显示/隐藏支付成功
  isShowPayPopup: function () {
    this.setData({
      isPaySuccess: !this.data.isPaySuccess,
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