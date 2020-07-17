<template>
    <div>
<!--      <div class="Home">hello world</div>
 -->
      <home-header></home-header>
      <my-swiper></my-swiper>
    </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import MySwiper from "./components/swiper";
  export default {
    name: "Home",
    components:{
      MySwiper,
      HomeHeader
    }
  }
</script>

<style>
  .Home {
  }
</style>
