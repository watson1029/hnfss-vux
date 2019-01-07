<template>
    <div>
        <flow>
            <flow-state state="1" is-done>
                <span slot="title">填写计划</span>
            </flow-state>
            <flow-line is-done></flow-line>

            <flow-state state="2" is-done>
                <span slot="title">提交计划</span>
            </flow-state>
            <flow-line is-done></flow-line>

            <flow-state state="3" is-done>
                <span slot="title">进近审核</span>
            </flow-state>
            <flow-line tip='审核中'></flow-line>

            <flow-state state="4">
                <span slot="title">区管审核</span>
            </flow-state>
            <flow-line></flow-line>

            <flow-state state="5">
                <span slot="title">审核完毕</span>
            </flow-state>
        </flow>
        <div style="padding: 15px;">
            <button-tab>
                <button-tab-item @on-item-click="consoleIndex('data')" selected>数据</button-tab-item>
                <button-tab-item @on-item-click="consoleIndex('map')">地图</button-tab-item>
            </button-tab>
        </div>
        <div id="data" style="display:block;">
            <group label-width="5em">
                <cell title="状态" value="审核中"></cell>
                <cell title="航空公司" value="山东琦泉通航公司"></cell>
                <cell title="任务类型" value="航摄"></cell>
                <cell title="起飞机场" value="唐庄机场"></cell>
                <cell title="降落机场" value="安阳北郊机场"></cell>
                <cell title="预计起飞" value="18/12/11 10:00"></cell>
                <cell title="预计降落" value="18/12/11 12:00"></cell>
                <cell title="机型/架数" value="HO300/1,C172/1"></cell>
                <cell title="机号" value="B-7028,B-00QL"></cell>
                <cell primary="content" title="作业范围A" value="安阳北郊机场(N36°08′19″E114°20′24″)为圆心半径5公里范围内.标压3000米以下."></cell>
                <cell primary="content" title="作业范围B" value="登封少林寺第二停车场(N34°30′58″E112°57′05″)-登封市公园(N34°29′01″E113°01′25″).真高300米以下."></cell>
                <cell primary="content" title="作业范围C" value="E点(N32°39′20″E112°44′10″)-F点(N33°14′12″E112°47′17″)-G点(N33°18′07″E113°02′06″)-H点(N33°13′06″E113°32′05″)-I点(N33°17′26″E113°41′04″)-J点(N33°17′24″E114°05′56″)-K点(N33°21′10″E114°18′46″)-L点(N33°17′30″E114°32′56″)航线左右1公里范围内.标压3000米以下."></cell>
            </group>
        </div>
        <div id="map" style="display:none;">
            <div class="amap-wrapper">
                <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
            </div>
        </div>
    </div>
</template>

<script>
import { Flow, FlowState, FlowLine, ButtonTab, ButtonTabItem, Cell, Group } from 'vux'

export default {
  components: {
    Flow,
    FlowState,
    FlowLine,
    ButtonTab,
    ButtonTabItem,
    Cell,
    Group
  },
  data() {
      return {
          showContent004: false
      }
  },
  methods: {
    consoleIndex (val) {
      if(val === 'data') {
          document.querySelector('#data').style.display = "block"
          document.querySelector('#map').style.display = "none"
      }
      if(val === 'map') {
          document.querySelector('#data').style.display = "none"
          document.querySelector('#map').style.display = "block"
      }
    }
  },
}
</script>

<style>
.amap-wrapper {
  height: 450px;
}
</style>
