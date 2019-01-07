<template>
  <div id="app">
    <x-header style="position:fixed;top:0;width:100%;height:46px;z-index:500;" :title="title" :left-options="showBack">
    </x-header>
    <router-view id="view"></router-view>
    <tabbar style="position:fixed;bottom:0;width:100%;height:50px;z-index:500;">
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
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem
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
      console.log(this.$route.path)
      if (this.$route.path === '/Detail') return {showBack: true}
      else return {showBack: false}
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
#view{
  margin-top: 46px;
  margin-bottom: 50px;
}
</style>
