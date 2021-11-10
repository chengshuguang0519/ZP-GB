<template>
  <div>   
		<div class="topone">
			<div class="topone-item">
        <div class="topone-left">
				<van-notice-bar scrollable  color="#f42736" background="#dddddd">
				<span id="wen">
					{{topNotice}}
				</span> 
				</van-notice-bar>
         
			</div>
			<div class=topone-right>
				<span @click="tuiao">内部办公系统</span>
				<span>
					| 
				</span>
				<span>内部邮箱:{{topEmail}}</span>
			</div>
      </div>
		</div>
        <div class="home-top">
        <div class="home-item" >
            <div>
                <img v-lazy="login" v-cloak  class="login">
                <div>
                  <span>检验检测机构共享服务平台</span>
                  <span>INSPECTION AND TESTING ORGANIZATION SERVICE PLATFORM</span>
                </div>
            </div>
            <div>
              <input type="text" v-model="inputVal" 
              placeholder="请输入关键字...">
              <div  @click="inputSearch">
                <img src="../assets/HomeImage/search.png" alt="" >
              </div>
            </div>
            <div>
              <img src="../assets/HomeImage/phone.png" alt="">
              
              <div>
                <span>全国技术服务热线</span>
                <span>010-83862162</span>
              </div>
            </div>
        </div>
    </div>
    <div class="home-menu">
        <div class="menu-item">
           <el-menu
            router
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            :default-active="defaultUrl"
            active-text-color="#eb8a2f">
       <el-menu-item index="/index" >首页</el-menu-item>
       <el-submenu index="/trainserver" >
          <template slot="title" >培训服务</template>
          <el-menu-item index="/trainserver/notice">通知公告</el-menu-item>
          <el-menu-item index="/trainserver/download">下载中心</el-menu-item>
          <el-menu-item index="/trainserver/enlist">培训报名</el-menu-item>
       </el-submenu>

       <el-submenu index="/serverdetails" >
          <template slot="title" >咨询服务</template>
          <div class="server1" v-for="(item,index) in itemList" :key="index">  
            <el-menu-item :index='item.path'>{{item.name}}</el-menu-item>
          </div>
       </el-submenu>

       <el-submenu index="/newscenter" >
          <template slot="title" >新闻中心</template>
          <el-menu-item index="/newscenter/regulations">政策法规</el-menu-item>
          <el-menu-item index="/newscenter/letters">行业快报</el-menu-item>
          <el-menu-item index="/newscenter/newsitem">本院动态</el-menu-item>
        </el-submenu>

        <el-menu-item index="/experteam" >专家团队</el-menu-item>
        <el-menu-item index="/knowledge" >知识问答</el-menu-item>
        <el-menu-item index="/certificate" >证书查询</el-menu-item>
        <el-menu-item index="/about" >关于我们</el-menu-item>
       </el-menu>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
      return {
        path:'/serverdetails/',
        login:{},
        inputVal:'',
        itemList:[],
        topNotice:'',
        topOaurl:'',
        topEmail:'',
        defaultUrl:'index'
      }
    },
    created(){
      this.getUrl()
      this.$axios({
          url:'/index',
      }).then(res => {
        console.log(res,'123');
        this.login = res.data.footer.left_image
        this.topNotice =res.data.head.topNotice
        this.topOaurl = res.data.head.topOaurl
        this.topEmail = res.data.head.topEmail
      })
      this.$axios({
          url:'/index/NewConsultService',
      }).then(res => {
        console.log(res.data,'header');
         this.itemList = res.data
         this.itemList.forEach(v=>{
           return v.path = this.path+v.id
         })
      })
    },
    methods:{
		// OA办公登录跳转
		tuiao(){
      window.location.href = 'http://' + this.topOaurl
		},
    getUrl(){
        var url = this.$route.path   
        var arr = url.split('/')
        this.defaultUrl ='/' + arr[1]
      },
    inputSearch(){
        let inputV = this.inputVal
        if(inputV =='证书查询' || inputV =='证书' || inputV =='查询' ){
          this.$router.push('/certificate')
        }else if(inputV =='机构简介' || inputV == '简介' || inputV =='机构'|| inputV =='关于'||inputV =='关于我们' ){
           this.$router.push('/introduction')
        }else if(inputV =='咨询服务' || inputV == '服务列表' || inputV =='咨询' ){
          this.$router.push('/consulting/list')
        }else if(inputV =='咨询报名' ||inputV =='报名'){
           this.$router.push('/consulting/apply')
        }else if(inputV =='案例' ||inputV =='案例体现'){
           this.$router.push('/consulting/reflect')
        }else if(inputV =='专项服务' || inputV == '专项'  ){
          this.$router.push('/server/list')
        }else if(inputV =='行业动态' || inputV == '行业'|| inputV == '动态' ){
          this.$router.push('/dynamic/item')
        }else if(inputV =='机构新闻' || inputV == '新闻'|| inputV == '机构' ){
          this.$router.push('/dynamic/news')
        }else if(inputV == '下载' ||inputV=='下载中心'){
          this.$router.push('/trainserver/download')
        }else if(inputV == '通知' ||inputV=='通知公告'){
          this.$router.push('/trainserver/notice')
        }else if(inputV == '政策' ||inputV=='政策法规'){
          this.$router.push('/newscenter/regulations')
        }else if(inputV == '行业' ||inputV=='行业快报'){
          this.$router.push('/newscenter/letters')
        }else if(inputV == '本院' ||inputV=='本院动态'){
          this.$router.push('/newscenter/newsitem')
        }else if(inputV == '专家' ||inputV=='专家团队'){
          this.$router.push('/experteam')
        }else if(inputV == '知识' ||inputV=='知识问答'){
          this.$router.push('/knowledge/knowledgeitem')
        }else{
          this.$message({
            message:'您要搜索的信息不存在，请检查您输入的内容。',
            type:'error',
            duration:1000
          })
        }
      }
    }
}
</script>

<style lang='less'>
   @media screen and(-ms-high-contrast: active), (-ms-high-contrast: none) {
         .van-notice-bar__wrap{
           height: 45px!important;
           margin-top: -18px!important;
           }
           .home-item{
      width: 1200px;
      height: 90px;
      background-color: #fff;
      margin: 0 auto;
      display: flex;
      align-items: center;
      >div:nth-child(1){
        width: 520px;
        height: 100px;
        display: flex;
        align-items: center;
        .login{
          width: 120px;
          height: 120px;
          margin: 20px 5px  0 0px;
          vertical-align: middle;
        }
       >div:nth-child(2){
         display: flex;
         justify-content: space-around;
         flex-direction: column;
        >span:nth-child(1){
          font-size: 30px;
          margin-top: 0px!important;
        }
        >span:nth-child(2){
          font-size: 12px;
          margin-top: 5px;
          color: #acabab;
        }
       }
      }
   }
    }
	/deep/ .van-notice-bar__content{
		font-size: 18px !important;
  }
    .home-menu .menu-item[data-v-4454bce4]{
     width: 1400px!important;
     margin: 0 18%;
    }
    .home-menu .menu-item[data-v-61dd7a3d]{
      width: 1200px!important;
      display: flex!important;
      flex-wrap: nowrap!important;
      margin:0 auto!important;
    }
     .el-submenu__title{
      background-color: #F16A0C;
    }
    .home-menu .menu-item[data-v-61dd7a3d]{
      width: 1200px!important;
      margin: 0 auto;
    }
   .el-menu.el-menu--horizontal{
       border-bottom: none!important;
       width: 1200px!important;
       display: flex!important;
  }
    .menu-item{
     border-bottom: none!important;
     display: flex!important;
    }
    .el-menu-item.is-active {
    border-bottom: none!important;
    background-color: #F16A0C!important;
    color: #fff!important;
    }
    .el-submenu .is-active {
     background-color: #F16A0C!important;
     color: #fff!important;
    }
    .el-submenu .is-active{
       background-color: #F16A0C!important;
       color: #fff!important;
    }
    .el-submenu :hover{
      background-color: #F16A0C!important;
    }
    .el-menu-item:hover{
      background-color: #F16A0C!important;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
      border-bottom: none!important;
      font-size: 20px!important;
    }
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
      background-color: #F16A0C!important;
      color: #fff!important;
      border-bottom: none!important;
    }
    .el-icon-arrow-down:before{
      color: #fff;
    }
 .el-menu-item{
     text-align: center!important;
     width: 165px!important;
     margin: 0px !important;
     font-size: 20px!important;
    }
    .el-menu--popup-bottom-start{
      width: 165px!important;
      text-align: center!important;
    }
    .el-menu--popup{
      min-width: 165px!important;
      text-align: center!important;
      margin-left: 0px!important;
    }

    .el-submenu{
      width: 260px!important;
      text-align: center!important;
    }
    .el-menu--horizontal .el-menu .el-menu-item{
      display: flex!important;
      align-items: center;
      justify-content: center;
      height: 70px;
      line-height: 20px;
      overflow: hidden;
      white-space: pre-wrap;
    }
    .el-menu--horizontal>.el-menu-item{
      border-bottom: none!important;
    }
</style>
<style lang='less' scoped>
.home-top{
    width: 100%;
    background-color: #fff;
    .home-item{
      width: 1200px;
      height: 90px;
      background-color: #fff;
      margin: 0 auto;
      display: flex;
      align-items: center;
      >div:nth-child(1){
        width: 520px;
        height: 100px;
        display: flex;
        align-items: center;
        .login{
          width: 120px;
          height: 120px;
          margin: 22px 5px  0 0px;
          vertical-align: middle;
        }
       >div:nth-child(2){
         display: flex;
         justify-content: space-around;
         flex-direction: column;
        >span:nth-child(1){
          font-size: 30px;
          margin-top: 30px;
        }
        >span:nth-child(2){
          font-size: 12px;
          margin-top: 5px;
          color: #acabab;
        }
       }
      }
      
      div:nth-child(2){
        height: 30px;
        line-height: 30px;
        display: flex;
        input{
          width: 328px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
          outline: none;
          border-color: #f6f6f6;
          height: 30px;
          text-indent: 1em;
          margin-left: 30px;
        }
        div{
          width: 80px;
          height: 33px;
          line-height: 33px;
          text-align: center;
          background-color: #0D3471;
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
          margin-right: 30px;
        }
        img{
          height: 20px;
          width: 20px;
          margin:11% auto;
          vertical-align: middle; 
        }
      }
      div:nth-child(3){
       display: flex;
       margin-left: 15px;
       >img:nth-child(1){
          vertical-align: middle;
          margin-top: 5px;
       }
       >div:nth-child(2){
         display: flex;
         flex-direction: column;
         margin-left: 10px;
         span:nth-child(1){
           font-size: 14px;
         }
         span:nth-child(2){
           color: #04048dcb;
           font-size: 18px;
           font-weight: bold;
         }
       }
      }
    }
  }
  .topone{
		width: 100%;
    height: 40px;
		background-color: #dddddd;
    .topone-item{
    width: 1200px;
    height: 40px;
    line-height: 40px!important;
    margin: 0 auto;
		display: flex;
		justify-content:space-between;
    .topone-left{
		font-size: 18px;
		width: 400px;
    justify-content: center!important;
    align-items: center!important;

	  }
  	.topone-right{
		   font-size: 18px;
	  	 color: #666666;
       margin-right: 10px;
	    }
     }
  	}
  #wen{
	font-size: 18px !important;	
  height: 40px!important;
  line-height: -100px!important;
	}
  .home-menu{
    width: 100%;
    margin-top: 26px;
    background-color: #545c64;
    .menu-item{
      width: 1400px;
      margin: 0 18%;  
    }
  }
  .swiper{
    width: 100%;
    margin-bottom: 20px;
  }
  .server{
    width: 100%;
    margin-bottom: 50px;
    .server-text{
      text-align: center;
      margin-bottom: 15px;
      span{
        color: #1d1d1d59;
      }
    }
    .server-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 1200px;
      text-align: center;
      margin: 0 auto;
      div{
        position: relative;
        width: 280px;
        height: 400px;
        margin: 20px;
        border-radius: 15px;
        background-color: #008cff;
        display: flex;
        flex-direction: column;
        img{
         width: 100px;
         height: 100px;
         position: absolute;
         left: 50%;
         top: 40%;
         transform: translate(-50%,-50%);
  
        }
        ul{
          flex: 1;
          display: flex;
          flex-direction: column;
          position: absolute;
          width: 100%;
          height: 100px;
          bottom: 0px;
          left: 50%;
          transform: translate(-50%);
          background-color: #04048dcb;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          color: #fff;
         li{
           margin-top: 20px;
         }
        }
      }
    }
  }
  .server{
    width: 150px!important;
  }
  
   /deep/.menu-item{
     border-bottom: none!important;
     display: flex!important;
    }
    .el-menu-item.is-active {
    border-bottom: none!important;
    background-color: #F16A0C!important;
    color: #fff!important;
    }
    .el-submenu .is-active {
     background-color: #F16A0C!important;
     color: #fff!important;
    }
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
      background-color: #F16A0C!important;
      color: #fff!important;
      border-bottom: none!important;
    }
     /deep/.el-menu-item{
     text-align: center!important;
     width: 165px!important;
     margin: 0px !important;
    }
    /deep/.el-menu--popup-bottom-start{
      width: 200px!important;
      text-align: center!important;
    }
    /deep/.el-menu--popup{
      min-width: 200px!important;
      text-align: center!important;
    }
    /deep/ .el-submenu{
      width: 200px!important;
      text-align: center!important;
    }
</style>