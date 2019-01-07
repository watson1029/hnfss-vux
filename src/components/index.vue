<template>
    <div>
        <swiper :list="piclist" v-model="picindex" @on-index-change="pic_onIndexChange"></swiper>
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
            <grid-item label="计划申请" link="/List" key="1">
                <img slot="icon" src="../assets/2.png">
            </grid-item>
            <grid-item label="数据统计" link="/Chart" key="2">
                <img slot="icon" src="../assets/1.png">
            </grid-item>
            <grid-item label="意见反馈" link="/FeedBack" key="3">
                <img slot="icon" src="../assets/4.png">
            </grid-item>
        </grid>
        <panel header="新闻中心" :list="list1" :footer="footer"></panel>
        <panel header="供求关系" :list="list2" :footer="footer"></panel>
    </div>
</template>

<script>
import { Grid, GridItem, Divider, Group, Cell, Marquee, MarqueeItem, Panel, Swiper } from 'vux'

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
    Swiper
  },
  methods: {
      demo01_onIndexChange (index) {
        this.picindex = index
      }
  },
  data() {
      return {
          list1:[
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
          list2:[
              {
                  src: '/src/assets/surveillance.png',
                  title: "白云通用航空有限公司提供直升机租赁",
                  desc: '直升机租赁 客户可租赁白云通航的直升机进行空中巡察、空中广告飞行、商务飞行、活动助兴飞行、静态展示、静态摄影等。直升机租赁分干租和湿租，前者是指客户仅租赁白云通航的直升机并根据自身的需求进行飞行和作业',
                  url: '#'
              },
              {
                  src: '/src/assets/nofound.jpg',
                  title: "白云通用航空有限公司-招飞信息",
                  desc: '广东白云通用航空有限公司是经中国民用航空总局批准的甲类通用航空企业，民用航空总局授权的私用驾驶员执照培训单位，中国航空运动协会南方飞机跳伞训练基地；安阳职业技术学院是2009年经省政府批准，国家教育部备案，由安阳市人民政府创办的一所全日制公办普通高职院校。',
                  url: '#'
              },
              {
                  src: '/src/assets/Company.jpg',
                  title: "美联华邦通用航空有限公司提供商照获取资格",
                  desc: '商照 商用驾驶员（ 英文：CommercialPilotLicense，简称CPL） 是一种允许持有人作为飞机的飞行员，并为他的工作获得报酬的资格。取得该资格的基本要求和赋予它的权限由国际民用航空组织规定，然而在实际执行相当差别很大。',
                  url: '#'
              }
          ],
          footer: {url: "#", title: "more."},
          piclist: [
            {
                url: 'javascript:',
                img: '/src/assets/banner1.jpg'
            }, {
                url: 'javascript:',
                img: '/src/assets/banner2.jpg'
            }, {
                url: 'javascript:',
                img: '/src/assets/banner3.jpg'
            }
          ],
          picindex: 0
      }
  }
}
</script>