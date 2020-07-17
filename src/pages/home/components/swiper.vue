<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'MySwiper',
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          loop:true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          debugger: true,
          onTransitionStart(swiper) {
            console.log(swiper)
          }
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color: #eee
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom 31.25%

    .swiper-img
      width: 100%
</style>


