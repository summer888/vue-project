<template>
  <div class="home">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/home/banner2.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../assets/home/banner1.jpg">
          </div>
          <div class="swiper-slide">
             <img src="../assets/home/banner4.jpg">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
        <nav>
          <a href="">
            <img src="../assets/home/icon1.jpg">
            <p>及时送</p>
          </a>
          <a href="">
            <img src="../assets/home/icon2.jpg">
            <p>超值购</p>
          </a>
          <a href="">
            <img src="../assets/home/icon3.jpg">
            <p>新品尝鲜</p>
          </a>
          <a href="">
            <img src="../assets/home/icon4.jpg">
            <p>招牌水果</p>
          </a>
          <a href="">
            <img src="../assets/home/icon5.jpg">
            <p>补水果品</p>
          </a>
          <a href="">
            <img src="../assets/home/icon6.jpg">
            <p>进口美味</p>
          </a>
          <a href="">
            <img src="../assets/home/icon7.jpg">
            <p>售后无忧</p>
          </a>
          <a href="">
            <img src="../assets/home/icon8.jpg">
            <p>一卡通行</p>
          </a>
        </nav>
        <div id="main">
          <a href="">
            <img src="../assets/home/main1.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main2.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main3.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main4.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main5.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main6.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main7.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main8.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main9.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main10.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main11.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main12.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main13.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main15.jpg">
          </a>
          <a href="">
            <img src="../assets/home/main16.jpg">
          </a>

        </div>

  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .home{
    .swiper-container{
      width:100%;
    }
    .swiper-container img{
      width:100%;
    }
    nav{
      width:100%;
      overflow:hidden;
    }
    nav>a{
      width:25%;
      float:left;
      text-align:center;
      font-size:0.5rem;
      margin-bottom:0.2rem;
      color:#000;
    }
    nav>a>img{
      width:40%;
      margin-top:0.5rem;
    }
    #main{
      width:100%;
    }
    #main>a{
      margin-top:0.3rem;
    }
    #main>a>img{
      width:100%;
    }
 }
 
</style>
