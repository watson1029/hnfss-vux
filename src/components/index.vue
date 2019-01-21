<template>
    <div>
        <swiper :list="piclist" v-model="picindex" @on-index-change="pic_onIndexChange"></swiper>
        <group>
            <cell title='公告'>
                <marquee>
                    <marquee-item key="1">四川首批低空空域公布</marquee-item>
                    <marquee-item key="2">通航企业可申请专项资金补贴</marquee-item>
                    <marquee-item key="3">调整航空器事故征候适用范围</marquee-item>
                    <marquee-item key="4">加强和规范民用无人驾驶航空器</marquee-item>
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
import pic_banner1 from '@/assets/banner1.jpg'
import pic_banner2 from '@/assets/banner2.jpg'
import pic_banner3 from '@/assets/banner3.jpg'
import pic_news from '@/assets/News.jpg'
import pic_plan from '@/assets/plan.png'
import pic_supply from '@/assets/Supply.jpg'
import pic_surveillance from '@/assets/surveillance.png'
import pic_nofound from '@/assets/nofound.jpg'
import pic_company from '@/assets/Company.jpg'

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
      pic_onIndexChange (index) {
        this.picindex = index
      }
  },
  mounted() {
      this.$ajax({
          method: 'get',
          url: 'http://hunanfss.msatcn.com:81/api/v1/supplydemand/getsupplydemandinfos?pageindex=1&pagesize=6',
      }).then(response=>{
          let _data = response.data.supplyDemandInfos;
          //设置新闻中心
          this.list1.push({ title: _data[0].title, desc: _data[0].summary, url: '#', src: pic_news });
          this.list1.push({ title: _data[1].title, desc: _data[1].summary, url: '#', src: pic_plan });
          this.list1.push({ title: _data[2].title, desc: _data[2].summary, url: '#', src: pic_supply });
          //设置供求关系
          this.list2.push({ title: _data[3].title, desc: _data[3].summary, url: '#', src: pic_surveillance });
          this.list2.push({ title: _data[4].title, desc: _data[4].summary, url: '#', src: pic_nofound });
          this.list2.push({ title: _data[5].title, desc: _data[5].summary, url: '#', src: pic_company });
      }).catch(function(err){
          console.log(err)
      })
  },
  data() {
      return {
          list1:[],
          list2:[],
          footer: {url: "#", title: "more."},
          piclist: [
            {
                url: 'javascript:',
                img: pic_banner1
            }, {
                url: 'javascript:',
                img: pic_banner2
            }, {
                url: 'javascript:',
                img: pic_banner3
            }
          ],
          picindex: 0
      }
  }
}
</script>