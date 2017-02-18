<template>
  <div id="app">
      <router-view></router-view>
      <div id="foot">
        <a href="#/home"><img src="./assets/icon/1-1.jpg"><p>首页</p></a>
        <a href="#/type"><img src="./assets/icon/2.jpg"><p>分类</p></a>
        <a href="#/shopcar"><img src="./assets/icon/3.jpg"><p>购物车</p></a>
        <a href="#/my"  ><img src="./assets/icon/4.jpg"><p>我的</p></a>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
   #foot{
      width:100%;
      background:#eee;
      position:fixed;
      bottom:0;
      left:0;
   }
   #foot>a{
    float:left;
    width:25%;
    text-align:center;
    color:#ccc;
    font-size:0.5rem; 
   }
   #foot>a:hover{
    color:#7faf1d;
   }
   #foot>a>img{
    width:25%;
    margin-top:0.3rem;
   }
</style>
