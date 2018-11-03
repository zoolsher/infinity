import { parse } from './parser/xml';
const data = `
<template>
  <view>
    <header title="主页" desc=""></header>
    <wxc-tab
        bind:tabchange="onClick"
        default-index="{{0}}"
        component-id="c2"
        animate="{{true}}"
      >
        <wxc-tab-panel
          wx:for="{{tabs}}"
          wx:for-item="tab"
          wx:key="{{tab.content}}"
          tab-index="{{index}}"
          component-id="c2"
          label="{{tab.title}}"
          style="display:none"
        >
          {{tab.content}}
        </wxc-tab-panel>
    </wxc-tab>


<swiper current="{{currentTab}}" duration="300" style="height:{{winHeight - 51}}px" bindchange="bindChange" >
    <swiper-item style="height: 100%;">
      <view style="height: 100%;"> 
        <Home></Home>
      </view>  
    </swiper-item>

    <swiper-item style="height: 100%;">
      <view style="height: 100%;"> 
      <image src="http://127.0.0.1:7001/public/images/0006b65fce3a9f90e247ec8c8805f0153ff8349b.jpg" class="slide-image" width="355" height="150"/>
       </view>  
    </swiper-item>

</swiper>


  </view>
</template>

<script>
import wepy from 'wepy';
import header from '../components/myheader';
import Home from './home';

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: '',
    usingComponents: {
      'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
      'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
      'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label'
    }
  };
  data = {
    tabs: [
      { title: '首页', content: '0' },
      { title: '动画', content: '1' },
      { title: '游戏', content: '2' },
      { title: '直播', content: '3' },
      { title: '音乐', content: '4' },
      { title: '舞蹈', content: '5' }
    ],
    winHeight: 0,
    winWidth: 0,
    currentTab: 0
  };
  methods = {
    bindChange: function(e) {
      this.currentTab = e.detail.current;
    }
  };

  components = {
    header,
    Home
  };

  onLoad(option) {
    console.log('onLoad');
    let systemInfo = wepy.getSystemInfoSync();
    this.winWidth = systemInfo.windowWidth;
    this.winHeight = systemInfo.windowHeight;
    console.log(this.winWidth + '/' + this.winHeight);
  }

  //加载更多
  // onReachBottom() {console.log('index-bindDownLoad');}
}
</script>

<style lang="less">

</style>

`;

const result = parse(data, {
  attrNodeName: 'ZOOLSHER_ZL_INFINITY_ATTR',
  attributeNamePrefix: '',
  ignoreAttributes: false,
  textNodeName: '#ZOOLSHER_ZL_INFINITY_TEXT',
});
