<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont bak-icon">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe7b3;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe7b2;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #FFFFFF

    .header-left
      width .64rem
      float left
      .bak-icon
        text-align center
        font-size .6rem
    .header-input
      flex: 1
      height .64rem
      padding-left .2rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      background #FFFFFF
      border-radius .1rem
      color #ccc

    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        margin-left :-.04rem
        font-size .24rem
</style>
