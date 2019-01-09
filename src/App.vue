<template>
  <div id="app">
    <drawer width="200px;"
    :show.sync="drawerVisibility"
    show-mode="push"
    placement="left"
    :drawer-style="{'background-color':'#35495e', width: '200px'}">

      <div slot="drawer">
        <group title="More." style="margin-top:20px;">
          <cell title="我的信息" link="#" @click.native="drawerVisibility = false">
          </cell>
          <cell title="系统设置" link="#" @click.native="drawerVisibility = false">
          </cell>
          <cell title="关于我们" link="#" @click.native="drawerVisibility = false">
          </cell>
        </group>
      </div>

      <view-box ref="viewBox">
        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :title="title" :left-options="showBack">
          <span v-if="showMenu === true" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
        </x-header>

        <router-view id="view"></router-view>

        <tabbar slot="bottom">
          <tabbar-item link="/Home">
            <img slot="icon" src="./assets/vux_logo.png">
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item show-dot link="/List">
            <img slot="icon" src="./assets/icon_nav_msg.png">
            <span slot="label">计划申请</span>
          </tabbar-item>
          <tabbar-item badge="2" link="/Chart">
            <img slot="icon" src="./assets/icon_nav_button.png">
            <span slot="label">统计</span>
          </tabbar-item>
          <tabbar-item link="/FeedBack">
            <img slot="icon" src="./assets/icon_nav_article.png">
            <span slot="label">意见反馈</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>

<script>
import { Group, Cell, ViewBox, XHeader, Tabbar, TabbarItem, Drawer } from 'vux'

export default {
  components: {
    Group,
    Cell,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Drawer
  },
  name: 'app',
  computed: {
    title () {
      if (this.$route.path === '/') return '通航飞行服务站'
      if (this.$route.path === '/Home') return '通航飞行服务站'
      if (this.$route.path === '/Fly') return '计划申请'
      if (this.$route.path === '/Current') return '起飞申请'
      if (this.$route.path === '/Chart') return '数据统计'
      if (this.$route.path === '/Detail') return '申请详情'
      if (this.$route.path === '/List') return '计划申请'
      if (this.$route.path === '/FeedBack') return '意见反馈'
    },
    showBack() {
      if (this.$route.path === '/Detail') return {showBack: true}
      else return {showBack: false}
    },
    showMenu() {
      if (this.$route.path === '/Detail') return false
      else return true
    }
  },
  data() {
    return {
      drawerVisibility: false
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#view{
  margin-top: 46px;
}
#app{
  height: 100%;
}
</style>
