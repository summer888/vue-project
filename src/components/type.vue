<template>
  <div class="type">
   	<div id="left">
   		<p v-on:click="dj()">所有商品</p>
   		<p v-on:click="dj2()">招牌果品</p>
   		<p v-on:click="dj3()">新品尝鲜</p>
   		<p v-on:click="dj4()">进口鲜果</p>
   		<p v-on:click="dj5()">国产鲜果</p>
   		<p v-on:click="dj6()">果篮礼盒</p>
   		<p v-on:click="dj7()">休闲干果</p>
   	</div>
   	<div id="right">
   		<ul v-for="obj in goodsArr">
   			<li>
   				<img :src="obj.imgUrl">
   			</li>
   			<li>
   				<p>{{obj.name}}</p>
   				<p>不少于500g</p>
   				<p>￥{{obj.price}}</p>
   			</li>
   		</ul>
   	</div>
  </div>
</template>

<script>
	const Err_Ok = 0;
  	export default{
  		data() {
  			return {
  				goodsArr:{}
  			}
  		},
    name: 'type',
    created:function(){
    	this.$http.get('/api/goods').then((response) => {
    		response = response.body;
    		if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    		}
    	})
    },
    methods:{
    	dj:function(){
   			this.$http.get('/api/goods').then((response) => {
    			response = response.body;
    			if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    			}
    		})	
    	},
    	dj2:function(){
   			this.$http.get('/api/goods2').then((response) => {
    			response = response.body;
    			if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    			}
    		})	
    	},
    	dj3:function(){
   			this.$http.get('/api/goods3').then((response) => {
    			response = response.body;
    			if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    			}
    		})	
    	},
    	dj4:function(){
   			this.$http.get('/api/goods4').then((response) => {
    			response = response.body;
    			if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    			}
    		})	
    	},
    	dj5:function(){
   			this.$http.get('/api/goods5').then((response) => {
    			response = response.body;
    			if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    			}
    		})	
    	},
    	dj6:function(){
   			this.$http.get('/api/goods6').then((response) => {
    			response = response.body;
    			if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    			}
    		})	
    	},
    	dj7:function(){
   			this.$http.get('/api/goods7').then((response) => {
    			response = response.body;
    			if(response.errno === Err_Ok){
    			this.goodsArr = response.data;
    			console.log(this.goodsArr)
    			}
    		})	
    	}
    }
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
			position:fixed;
			left:0;
			top:0;
		}
		#left>p{
			line-height:2.5rem;
			font-size:0.4rem;
			color:gray;
		}
		#left>p:nth-child(1){
			background:#fff;
			color:#7faf1d;
		}
		#right{
			width:80%;
			margin-left:20%;
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
			margin-left:5%;
		}
		#right>ul>li:nth-child(1)>img{
			width:85%;
		}
		#right>ul>li:nth-child(2){
			width:60%;
			margin-left:1%;
			line-height:0.7rem;
			margin-top:0.5rem;
		}
		#right>ul>li:nth-child(2)>p:nth-child(2){
			color:gray;
		}
		#right>ul>li:nth-child(2)>p:nth-child(3){
			color:orange;
			font-size:0.6rem;
		}


	}
</style>
