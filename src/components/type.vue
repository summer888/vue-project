<template>
  <div class="type">
   	<div id="left">
   		<p>所有商品</p>
   		<p>招牌果品</p>
   		<p>新品尝鲜</p>
   		<p>进口鲜果</p>
   		<p>国产鲜果</p>
   		<p>果篮礼盒</p>
   		<p>休闲干果</p>
   	</div>
   	<div id="right">
   		<ul>
   			<li>
   				<img src=".././assets/type/1.jpg">
   			</li>
   			<li>
   				<p>招牌-高山水蜜桃(中)</p>
   				<p>不少于500g</p>
   				<p>￥19.1</p>
   			</li>
   		</ul>
   	</div>
  </div>
</template>

<script>
  export default{
    name: 'type'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.type{
		overflow:hidden;
		#left{
			width:20%;
			text-align:center;
			background:#eee;
			float:left;
		}
		#left>p{
			line-height:2.5rem;
			font-size:0.4rem;
			color:gray;
		}
		#right{
			width:80%;
			float:left;
		}
		#right>ul{
			width:100%;
			overflow:hidden;
			font-size:0.5rem;
		}
		#right>ul>li{
			float:left;
		}
		#right>ul>li:nth-child(1){
			width:30%;
		}
		#right>ul>li:nth-child(1)>img{
			width:90%;
		}
		#right>ul>li:nth-child(2){
			width:60%;
			margin-left:5%;
			line-height:0.7rem;
			margin-top:0.5rem;
		}
		#right>ul>li:nth-child(2)>p:nth-child(2){
			color:gray;
		}
		#right>ul>li:nth-child(2)>p:nth-child(3){
			color:orange;
		}

	}
</style>
