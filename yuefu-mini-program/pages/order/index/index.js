// pages/order/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabdata: ['全部', '待付款', '待发货', '待收货', '待评价'],
    goods_list: [1, 2],
    showModal_1: false,
    showModal_2: false,
    showModal_3: false,
    showModal_4: false,
    showModal_5: false,

  },
  tab_clk: function(e) {
    console.log(e.currentTarget.id)
    this.setData({
      active: e.currentTarget.id
    })
  },
  /**
   * 弹窗
   */
  showDialogBtn: function() {
    this.setData({
      showModal: true
    })
  },
  open_ok: function () {
    this.setData({
      showModal_1: true
    })
  },
  open_cancel: function() {
    this.setData({
      showModal_5: true
    })
  },
  open_tix: function() {
    this.setData({
      showModal_2: true
    })
  },
  open_pj: function() {
    this.setData({
      showModal_3: true
    })
    // wx.navigateTo({
    //   url: '../releaseComment/releaseComment'
    // })
  },
  open_pay: function() {
    wx.navigateTo({
      url: '../gopay/gopay'
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function() {},
  /**
   * 隐藏模态对话框
   */
  hideModal: function() {
    this.setData({
      showModal_1: false,
      showModal_2: false,
      showModal_3: false,
      showModal_4: false,
      showModal_5: false,

    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function() {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function() {
    this.hideModal();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})