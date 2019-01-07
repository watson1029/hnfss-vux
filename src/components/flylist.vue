<template>
    <div>
        <form-preview header-label="状态" header-value="未提交" :body-items="list1" :footer-buttons="buttons1"></form-preview>
        <br>
        <form-preview header-label="状态" header-value="待审核" :body-items="list2" :footer-buttons="buttons2"></form-preview>
        <br>
        <form-preview header-label="状态" header-value="审核中" :body-items="list3" :footer-buttons="buttons3"></form-preview>
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
                value: "青岛直升机航空公司"
            },
            {
                label: "任务类型",
                value: "人工增雨"
            },
            {
                label: "起飞机场",
                value: "栾川机场"
            },
            {
                label: "降落机场",
                value: "新郑机场"
            },
            {
                label: "预计起飞",
                value: "18/12/11 10:00"
            },
            {
                label: "预计降落",
                value: "18/12/11 12:00"
            },
            {
                label: "机型/架数",
                value: "Mi-171/1"
            },
            {
                label: "机号",
                value: "B-7833"
            }
        ],
        list2: [
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
                label: "预计起飞",
                value: "18/12/17 14:00"
            },
            {
                label: "预计降落",
                value: "18/12/17 15:00"
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
        list3: [
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
                label: "预计起飞",
                value: "18/12/17 14:00"
            },
            {
                label: "预计降落",
                value: "18/12/17 15:00"
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
                text: '删除',
                link: '#'
            },
            {
                style: "primary",
                text: '修改',
                link: '/Detail'
            },
            {
                style: "primary",
                text: '提交',
                link: '#'
            }
        ],
        buttons2: [
            {
                style: "primary",
                text: '查看',
                link: '/Detail'
            },
            {
                style: "default",
                text: '回退',
                link: '#'
            },
            {
                style: "primary",
                text: '审核',
                link: '#'
            }
        ],
        buttons3: [
            {
                style: "default",
                text: '删除',
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