// pages/dingcan/index/index.js
var app = getApp();
var imageBaseUrl = app.globalData.imageBaseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageBaseUrl,
    navList: [
      { name: '特惠', icon: '../../../assets/icon/icon-tabs.png' },
      { name: '热销', icon: '../../../assets/icon/icon-hot.png' },
      { name: '精选跳槽' },
      { name: '养生饮品' },
      { name: '营养粥类' },
      { name: '滋补汤品' },
      { name: '瘦美小主' },
      { name: '月子套餐', icon: '' },
      { name: '来点小料', icon: '' },
      { name: '特色主食', icon: '' },
    ],
    navActive: 1,
    classList: [
      {
        title: '热销',
        list: [
          {
            pic: 'http://47.106.206.50/yuefu/assets/image/pageImages/food-4.png',
            isCan: false,
          },
          {
            pic: 'http://47.106.206.50/yuefu/assets/image/pageImages/food-4.png',
            isCan: true,
          },
          {
            pic: 'http://47.106.206.50/yuefu/assets/image/pageImages/food-4.png',
            isCan: false,
          },
          {
            pic: 'http://47.106.206.50/yuefu/assets/image/pageImages/food-4.png',
            isCan: false,
          },
        ]
      }
    ],
    isShow: false,
    isShowSett: false,
    isShow_detail:false,
    packList: ['分装 (推荐)', '现喝'],
    packActive: 0,
    tasteList: ['经典 (标准糖)', '经典 (少糖)', '无姜 (标准糖)', '无姜 (少糖)'],
    tasteActive: 0,
  },
  // 显示/隐藏规格弹窗
  switchModel: function () {
    this.setData({
      isShow: !this.data.isShow,
    })
  },
	switchModel_detail:function() {
    this.setData({
      isShow_detail: !this.data.isShow_detail,
    })
  },
  // 阻止规格弹窗冒泡
  catchtap: function () {

  },
  // 处理结算
  handlePay: function () {
    wx.navigateTo({
      url: '../settlement/settlement',
    })
  },
  handleAddCart: function () {
    this.setData({
      isShowSett: true,
      isShow: false,
      isShow_detail: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  switchNav: function (e) {
    let navActive = e.currentTarget.dataset.index;
    this.setData({
      navActive,
    })
  },
  // 切换包装
  switchPack: function (e) {
    let packActive = e.currentTarget.dataset.index;
    this.setData({
      packActive,
    })
  },
  // 切换口味
  switchTaste: function (e) {
    let tasteActive = e.currentTarget.dataset.index;
    this.setData({
      tasteActive,
    })
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