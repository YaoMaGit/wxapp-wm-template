// pages/cart/index/index.js
var app = getApp();
var imageBaseUrl = app.globalData.imageBaseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageBaseUrl,
    isShow: true,
    isShowDetail: false,
    packList: [
      [
        { id: 1, name: '分装 (推荐)' },
        { id: 2, name: '现喝'},
      ],
    ],
    packActive: 1,
    ruleList: [
      [
        { id: 1, name: '经典 (标准糖)' },
        { id: 2, name: '经典 (少糖)' },
        { id: 3, name: '无姜 (标准糖)' },
      ],
      [
        { id: 4, name: '无姜 (少糖)' },
      ]
    ],
    ruleActive: 1,
  },
	/**
	 * 页面的初始数据
	 */
	checkboxChange: function (e) {
		var checked = e.detail.value
		var changed = {}

		this.setData(changed)

	},
  open_city_sel: function (options) {
    wx.navigateTo({
      url: '../city_sel/city_sel'
    })
  },
  open_search:function(options) {
    wx.navigateTo({
      url: '../search_hot/search_hot'
    })
  },

  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  closePopup: function () {
    this.setData({
      isShow: false,
    })
  },
  switchPack: function (e) {
    let packActive = e.currentTarget.dataset.index;
    this.setData({
      packActive,
    })
  },
  switchRule: function (e) {
    let ruleActive = e.currentTarget.dataset.index;
    this.setData({
      ruleActive,
    })
  },
  isShowDetail: function () {
    this.setData({
      isShowDetail: !this.data.isShowDetail,
    })
  },
  catchtap: function () {
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