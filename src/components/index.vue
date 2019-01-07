<template>
    <div>
        <group>
            <cell title='公告'>
                <marquee>
                    <marquee-item key="1">四川首批低空空域公布</marquee-item>
                    <marquee-item key="1">通航企业可申请专项资金补贴</marquee-item>
                    <marquee-item key="1">调整航空器事故征候适用范围</marquee-item>
                    <marquee-item key="1">加强和规范民用无人驾驶航空器</marquee-item>
                </marquee>
            </cell>
        </group>
        <grid :cols="3" :show-lr-borders="false">
            <grid-item label="新闻列表" key="1">
                <img slot="icon" src="../assets/5.png">
            </grid-item>
            <grid-item label="计划申请" link="/Fly" key="2">
                <img slot="icon" src="../assets/2.png">
            </grid-item>
            <grid-item label="起飞申请" link="/Current" key="3">
                <img slot="icon" src="../assets/6.png">
            </grid-item>
            <grid-item label="数据统计" link="/Chart" key="4">
                <img slot="icon" src="../assets/1.png">
            </grid-item>
            <grid-item label="系统设置" key="5">
                <img slot="icon" src="../assets/3.png">
            </grid-item>
            <grid-item label="意见反馈" key="6">
                <img slot="icon" src="../assets/4.png">
            </grid-item>
        </grid>
        <panel header="新闻列表" :list="list" :footer="footer"></panel>
        <divider>数据统计</divider>
        <v-chart :data="weekdata">
            <v-scale x field="日期" />
            <v-scale y field="数量" />
            <v-bar series-field="name" 
            :adjust="{
                type: 'dodge',
                marginRatio: 0.1 // 设置分组间柱子的间距
            }" />
            <v-tooltip show-value-in-legend />
        </v-chart>
    </div>
</template>

<script>
import { Grid, GridItem, Divider, Group, Cell, Marquee, MarqueeItem, Panel, VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale } from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    Divider,
    Group,
    Cell,
    Marquee,
    MarqueeItem,
    Panel,
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VBar,
    XButton,
    VScale
  },
  data() {
      return {
          list:[
              {
                  src: '/src/assets/News.jpg',
                  title: "四川首批低空空域公布",
                  desc: '12月18日，四川省低空空域协同管理委员会办公室(简称省低空办)正式发布四川省低空空域协同管理试点首批空域，并通报首批低空空域运行规则。',
                  url: '#'
              },
              {
                  src: '/src/assets/plan.png',
                  title: "民航局：通航企业可申请2019年专项资金补贴",
                  desc: '近日，民航局财务司发布《关于申报2019年通用航空发展专项资金的通知》，请通航企业根据《通用航空发展专项资金管理暂行办法》申请2019年补贴。',
                  url: '#'
              },
              {
                  src: '/src/assets/Supply.jpg',
                  title: "民航局调整航空器事故征候部分条款及适用范围",
                  desc: '12月27日，民航局发布《关于调整民用航空器事故征候部分条款及适用范围的通知》，对《民用航空器事故征候》（MH/T2001-2015）部分条款及适用范围作出了调整，并将于2018年1月1日正式实施。',
                  url: '#'
              }
          ],
          footer: {url: "#", title: "more."},
          weekdata: [
            { name: '计划申请', 日期: '星期一', 数量: 4 },
            { name: '计划申请', 日期: '星期二', 数量: 3 },
            { name: '计划申请', 日期: '星期三', 数量: 1 },
            { name: '计划申请', 日期: '星期四', 数量: 5 },
            { name: '计划申请', 日期: '星期五', 数量: 2 },
            { name: '计划申请', 日期: '星期六', 数量: 0 },
            { name: '计划申请', 日期: '星期天', 数量: 2 },
            { name: '起飞申请', 日期: '星期一', 数量: 1 },
            { name: '起飞申请', 日期: '星期二', 数量: 1 },
            { name: '起飞申请', 日期: '星期三', 数量: 5 },
            { name: '起飞申请', 日期: '星期四', 数量: 9 },
            { name: '起飞申请', 日期: '星期五', 数量: 3 },
            { name: '起飞申请', 日期: '星期六', 数量: 2 },
            { name: '起飞申请', 日期: '星期天', 数量: 6 },
         ]
      }
  }
}
</script>