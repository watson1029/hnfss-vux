<template>
    <div>
        <br>
        <divider>计划数据-年度统计</divider>
        <v-chart :data="monthdata">
            <v-scale x field="月份" />
            <v-scale y field="数量" />
            <v-bar series-field="name" 
            :adjust="{
                type: 'dodge',
                marginRatio: 0.1 // 设置分组间柱子的间距
            }" />
            <v-tooltip show-value-in-legend />
        </v-chart>
        <br>
        <divider>计划数据-本周统计</divider>
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
import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale, Divider } from 'vux'

export default {
  components: {
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VBar,
    XButton,
    VScale,
    Divider
  },
  data () {
    return {
      monthdata: [
        { name: '计划申请', 月份: '1月', 数量: 18 },
        { name: '计划申请', 月份: '2月', 数量: 28 },
        { name: '计划申请', 月份: '3月', 数量: 39 },
        { name: '计划申请', 月份: '4月', 数量: 81 },
        { name: '计划申请', 月份: '5月', 数量: 47 },
        { name: '计划申请', 月份: '6月', 数量: 20 },
        { name: '计划申请', 月份: '7月', 数量: 24 },
        { name: '计划申请', 月份: '8月', 数量: 35 },
        { name: '计划申请', 月份: '9月', 数量: 39 },
        { name: '计划申请', 月份: '10月', 数量: 81 },
        { name: '计划申请', 月份: '11月', 数量: 47 },
        { name: '计划申请', 月份: '12月', 数量: 20 },
        { name: '起飞申请', 月份: '1月', 数量: 12 },
        { name: '起飞申请', 月份: '2月', 数量: 23 },
        { name: '起飞申请', 月份: '3月', 数量: 34 },
        { name: '起飞申请', 月份: '4月', 数量: 99 },
        { name: '起飞申请', 月份: '5月', 数量: 52 },
        { name: '起飞申请', 月份: '6月', 数量: 35 },
        { name: '起飞申请', 月份: '7月', 数量: 37 },
        { name: '起飞申请', 月份: '8月', 数量: 42 },
        { name: '起飞申请', 月份: '9月', 数量: 34 },
        { name: '起飞申请', 月份: '10月', 数量: 99 },
        { name: '起飞申请', 月份: '11月', 数量: 52 },
        { name: '起飞申请', 月份: '12月', 数量: 35 },
      ],
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