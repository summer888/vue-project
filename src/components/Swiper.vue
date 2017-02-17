<template>
  <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="../assets/guide/1.png">
              <a href="#/index">
                <img src="../assets/guide/5.png" id="swiper-img">
              </a>
              
          </div>
          <div class="swiper-slide"><img src="../assets/guide/2.png"></div>
          <div class="swiper-slide"><img src="../assets/guide/3.png"></div>
          <div class="swiper-slide"><img src="../assets/guide/4.png"></div>
        </div>
      </div>
  </div>
</template>
<script>
require('../../static/swiper.min.css')
export default {
  name: 'swiper'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container{
    width:100%;
    height:100%;
  }
  .swiper-container img{
    width:100%;
  }
  #swiper-img{
    width:60%;
    position:fixed;
    top:80%;
    left:20%;
  }
</style>
