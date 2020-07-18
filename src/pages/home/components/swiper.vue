<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperLists" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
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
        },
        swiperLists:[{
          id:'001',
          imgUrl:"http://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
        },{
          id:'002',
          imgUrl: "http://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
        },
          {
            id: '003',
            imgUrl: "http://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg"
          }]
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
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    background-color: #eee
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom 30%

    .swiper-img
      width: 100%
</style>s


