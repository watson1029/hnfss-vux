<template>
    <div>
        <group label-width="4.5em" label-margin-right="2em" label-align="right">
            <x-input title="公司"></x-input>
            <x-input title="联系方式"></x-input>
            <popup-picker title="问题类别" :data="list" value-text-align="left"></popup-picker>
            <x-textarea title="问题描述" placeholder="问题详细描述" :show-counter="false" :rows="5"></x-textarea>
            <x-button type="primary">点击反馈</x-button>
        </group>
    </div>
</template>

<script>
import { Group, XInput, XTextarea, PopupPicker, XButton } from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    PopupPicker,
    XButton
  },
  data () {
      return {
        list: [['Bug反馈', '需求反馈', '意见及建议']],
        numberValue: 0
      }
    }
}
</script>