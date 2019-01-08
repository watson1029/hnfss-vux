<template>
    <div>
        <div style="padding: 15px;">
            <button-tab>
                <button-tab-item @on-item-click="consoleIndex('repet')" selected>长期计划</button-tab-item>
                <button-tab-item @on-item-click="consoleIndex('fly')">飞行计划</button-tab-item>
                <button-tab-item @on-item-click="consoleIndex('current')">当日动态</button-tab-item>
            </button-tab>
        </div>
        <div id="repet" style="display:block;">
            <form-preview header-label="状态" header-value="未提交" :body-items="list1" :footer-buttons="buttons1"></form-preview>
            <br>
            <form-preview header-label="状态" header-value="待审核" :body-items="list2" :footer-buttons="buttons2"></form-preview>
        </div>
        <div id="fly" style="display:none;">
            <form-preview header-label="状态" header-value="审核中" :body-items="list3" :footer-buttons="buttons3"></form-preview>
        </div>
        <div id="current" style="display:none;">
            <form-preview header-label="状态" header-value="已审核" :body-items="list4" :footer-buttons="buttons4"></form-preview>
        </div>
    </div>
</template>

<script>
import { ButtonTab, ButtonTabItem, FormPreview } from 'vux'

export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    FormPreview
  },
  data() {
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
                link: '/Detail'
            },
            {
                style: "primary",
                text: '修改',
                link: '/Detail'
            },
            {
                style: "primary",
                text: '提交',
                link: '/Detail'
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
                link: '/Detail'
            },
            {
                style: "primary",
                text: '审核',
                link: '/Detail'
            }
        ],
        buttons3: [
            {
                style: "default",
                text: '删除',
                link: '/Detail'
            },
            {
                style: "primary",
                text: '查看',
                link: '/Detail'
            }
        ],
        list4: [
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
        buttons4: [
            {
                style: "primary",
                text: '起飞/降落报',
                link: '/Detail'
            },
            {
                style: "primary",
                text: '查看',
                link: '/Detail'
            }
        ]
      }
  },
  methods: {
    consoleIndex (val) {
      if(val === 'repet') {
          document.querySelector('#repet').style.display = "block"
          document.querySelector('#fly').style.display = "none"
          document.querySelector('#current').style.display = "none"
      }
      if(val === 'fly') {
          document.querySelector('#repet').style.display = "none"
          document.querySelector('#fly').style.display = "block"
          document.querySelector('#current').style.display = "none"
      }
      if(val === 'current') {
          document.querySelector('#repet').style.display = "none"
          document.querySelector('#fly').style.display = "none"
          document.querySelector('#current').style.display = "block"
      }
    }
  },
}
</script>