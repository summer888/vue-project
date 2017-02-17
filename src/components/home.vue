<template>
  <div class="home">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/home/banner1.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../assets/home/banner2.jpg">
          </div>
          <div class="swiper-slide">
             <img src="../assets/home/banner2.jpg">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 *{
    margin:0;
    padding:0;
 }
  .swiper-container{
  width:100%;
  }
  .swiper-container img{
    width:100%;
  }
</style>
