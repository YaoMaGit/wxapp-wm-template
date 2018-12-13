// pages/wode/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
goods_list:[1,2,3,4,5],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  xxx:function(){
    wx.navigateTo({
      url: '../address/address'
    })
  },
	open_singinpage:	function(){
		wx.navigateTo({
			url: '../singinpage/singinpage'
		})
	},
	open_oftengoods:
	function(){
		wx.navigateTo({
			url: '../oftengoods/oftengoods'
		})
	},
	open_team:function(){
    wx.navigateTo({
      url: '../teamlist/teamlist'
    })
  },
	open_score:function(){
    wx.navigateTo({
      url: '../myscore/myscore'
    })
  },
  open_singin: function () {
    wx.navigateTo({
      url: '../singin/singin'
    })
  },
	open_becamefx:function () {
    wx.navigateTo({
      url: '../becamefx/becamefx'
    })
  },
	open_question:function(){
		wx.navigateTo({
			url: '../question/question'
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