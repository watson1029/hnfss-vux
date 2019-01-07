<template>
    <div>
        <form-preview header-label="状态" header-value="已审核" :body-items="list1" :footer-buttons="buttons1"></form-preview>
    </div>
</template>

<script>
import { FormPreview } from 'vux'

export default {
  components: {
    FormPreview
  },
  data () {
    return {
        list1: [
            {
                label: "航空公司",
                value: "山东琦泉通航公司"
            },
            {
                label: "任务类型",
                value: "航摄"
            },
            {
                label: "起飞机场",
                value: "唐庄机场"
            },
            {
                label: "降落机场",
                value: "安阳北郊机场"
            },
            {
                label: "起飞时间",
                value: ""
            },
            {
                label: "降落时间",
                value: ""
            },
            {
                label: "机型/架数",
                value: "HO300/1,C172/1"
            },
            {
                label: "机号",
                value: "B-7028,B-00QL"
            }
        ],
        buttons1: [
            {
                style: "primary",
                text: '起飞/降落报',
                link: '#'
            },
            {
                style: "primary",
                text: '查看',
                link: '/Detail'
            }
        ]
    }
  }
}
</script>