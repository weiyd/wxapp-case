App({
  globalData: {

  },

  onLaunch: function () {
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response)=> {
        Object.assign(this.globalData, response.data)
      },
    })
  },
})
