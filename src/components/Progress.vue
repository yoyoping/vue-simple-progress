<template>
  <div class="progress" ref="progress">
    <div class="drag" ref="drag"
    :style="{position: 'absolute',left: 'calc('+ progressRate +'% - 7px)'}"
    @touchmove.prevent="touchMove">
      <span></span>
    </div>
    <p class="line-b"></p>
    <p class="current" :style="{width: progressRate + '%'}"></p>
  </div>
</template>
<script>
export default {
  props: {
    currentP: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      progressRate: 20
    }
  },
  methods: {
    touchMove (e) {
      const pageX = e.touches[0].pageX // 距离屏幕左边的距离
      const progressLeft = this.$refs.progress.getBoundingClientRect().left // 整个滚动条距离页面左边的距离
      const progressRight = this.$refs.progress.getBoundingClientRect().right // 整个滚动条最右边距离页面左边的距离
      this.progressRate = (pageX - progressLeft) / this.$refs.progress.clientWidth * 100 // 拖动的点距离滚动条左边的距离百分比
      if (this.progressRate <= 0) { // 超出左边就为0%
        this.progressRate = 0
      } else if (this.progressRate >= 100) { // 超出右边就为100%
        this.progressRate = 100
      }
      this.$emit('change', this.progressRate)
    }
  }
}
</script>

<style scoped>
.progress{
  width: 100%;height: 14px;position: relative;
}
.line-b{
  width: 100%;height: 3px;background-color: #999;position: absolute;left: 0;border-radius: 3px;top:0;bottom: 0;margin: auto;z-index: 1;
}
.drag{
  width: 14px;height: 14px;background-color: #fff;border-radius: 50%;z-index: 3;
  position: relative;
}
.drag span{
  width: 3px;height: 3px;background-color: #d44439;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: block;
  border-radius: 50%;
}
.current{
  height: 3px;background-color: #d44439;position: absolute;left: 0;border-radius: 0.01rem;top:0;bottom: 0;margin: auto;z-index: 2;
}
</style>
