<template>
  <div class="my">
   	<div id="nav">
   		<img src="../assets/my/user_center_top_bg.png">
   		<img src="../assets/my/img_user_photo_not_login.png">
   		<button>登录</button>
   	</div>
   	<div id="txt">
   		<p>
   			<span>我的订单</span>
   			<a href="">查看全部订单&gt;</a>
   		</p>
   	</div>
   	<div id="main">
   		<a href="">
   			<img src="../assets/my/icon_waitting_pay.png">
   			<p>待付款</p>
   		</a>
   		<a href="">
   			<img src="../assets/my/icon_send_goods.png">
   			<p>待发货</p>
   		</a>
   		<a href="">
   			<img src="../assets/my/icon_dlieverying.png">
   			<p>待收货</p>
   		</a>
   		<a href="">
   			<img src="../assets/my/icon_after_sale.png">
   			<p>退款售后</p>
   		</a>
   	</div>
   	<div id="main-money">
   		<p>
   			<span>5 元</span>
   			<span>余额</span>
   			<a href="">去充值&gt;</a>	
   		</p>
   		<p>
   			<span>0张</span>
   			<span>优惠劵</span>
   			<a href="">去看看&gt;</a>	
   		</p>
   			
   	</div>
   	<div id="more">
   		<a href="">地址管理</a>
   		<a href="">开具发票</a>
   		<a href="">更多</a>
   	</div>
   	
  </div>
</template>

<script>
  export default{
    name: 'my'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.my{

		#nav{
			width:100%;
		}
		#nav>img:nth-child(1){
			width: 100%;
			opacity:0.8;	
		}
		#nav>img:nth-child(2){
			width:16%;
			position: absolute;
			left: 42%;
			top:6%;
		}
		#nav>button{
			color:#fff;
			border:none;
			border:1px solid #fff;
			position:absolute;
			top:17%;
			left:43.5%;
			background:none;
			padding:0.1em 0.5rem;
			font-size:0.3rem;
			border-radius:0.1rem;
		}
		#txt{
			width:100%;
			font-size:0.5rem;
		}
		#txt>p{
			width:100%;
			line-height:1.5rem;
		}
		#txt>p>span{
			float:left;
			display:inline-block;
			margin-left:0.5rem;
		}
		#txt>p>a{
			float:right;
			margin-right:0.5rem;
			color:gray;
		}
		#main{
			width:100%;
			margin-top:2rem;
			font-size:0.5rem;
			display:flex;
			text-align:center;
		}
		#main>a{
			flex:1;
			line-height:0.8rem;
			color:#000;
		}
		#main>a>img{
			width:20%;
		}
		#main-money{
			width:100%;
			display:flex;
			font-size:0.5rem;
			text-align:center;
			margin-top:1rem;
		}
		#main-money>p{
			flex:1;
		}
		#main-money>p>span{
			display:block;
		}
		#main-money>p>a{
			margin-left:55%;
			color:gray;
		}
		#more{
			width:100%;
			font-size:0.5rem;
		}
		#more>a{
			width:100%;
			line-height:2rem;
			display:block;
			color:#000;
			margin-left:5%;
		}
	}
</style>
