// pages/menber/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        type: '【商品问题】',
        title: '（不新鲜，少送漏送，送错等）',
      },
      {
        type: '【配送问题】',
        title: '（配送时间，范围，修改配送信息）',
      },
      {
        type: '【商品问题】',
        title: '（增加商品，多笔订单一起配送等）',
      }
    ],
    openActive: 1,
  },
  openDetail: function (e) {
    let openActive = e.currentTarget.dataset.index;
    this.setData({
      openActive,
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