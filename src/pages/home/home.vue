<template>
    <div>
<!--      <div class="Home">hello world</div>
 -->
      <home-header></home-header>
    </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  export default {
    name: "Home",
    components:{
      HomeHeader
    }
  }
</script>

<style>
  .Home {
  }
</style>
