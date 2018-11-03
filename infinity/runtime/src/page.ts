export class Page {
  /**
   * 页面数据
   */
  public data: any = {};
  /**
   * 生命周期 - 页面加载
   * @param query 页面入参
   */
  public onLoad(query: object) {}
  /**
   * 生命周期 - 页面加载完成
   */
  public onReady() {}
  /**
   * 生命周期 - 页面显示
   */
  public onShow() {}
  /**
   * 生命周期 - 页面隐藏
   */
  public onHide() {}
  /**
   * 生命周期 - 页面被关闭
   */
  public onUnload() {}
  /**
   * 生命周期 - 标题被点击
   */
  public onTitleClick() {}
  /**
   * 生命周期 - 页面被下拉
   */
  public onPullDownRefresh() {}
  /**
   * 生命周期 - 页面被拉到底部
   */
  public onReachBottom() {}
  /**
   * 生命周期 - 返回自定义分享信息
   */
  public onShareAppMessage() {}
}

export function pageConnect(p: typeof Page) {}
