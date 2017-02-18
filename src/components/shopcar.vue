<template>
  <div class="shopcar">
   		<nav>购物车</nav>
   		<p class="map">配送至:北京市昌平区生命科学园</p>
   		<div id="main">
   			<img src=".././assets/car/1.jpg">
   			<p>你的购物车空空哒~~</p>
   			<p>快去选几件放进来吧！</p>
   			<a href="#/type">去逛逛</a>
   		</div>
  </div>
</template>

<script>
  export default{
    name: 'shopcar'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.shopcar{
		nav{
			width: 100%;
			line-height: 2rem;
			font-size:0.6rem;
			font-weight:800;
			text-align:center;
		}
		.map{
			width:100%;
			background:#eee;
			font-size:0.5rem;
			line-height:1.2rem;
			padding-left:5%;
		}
		#main{
			width:100%;
			position:absolute;
			top:40%;
			left:2%;
			font-size:0.5rem;
			text-align:center;
			line-height:1.3rem;
			color:gray;
		}
		#main>a{
			color:#7faf1d;
			border:1px solid #7faf1d;
			padding:0.3rem 2rem;
			border-radius:0.3rem;
		}
	}
</style>
