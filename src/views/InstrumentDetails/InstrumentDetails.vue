<template>
  <div class="instrument-details">
      <Header></Header>
      <div class="details-top">
          <img src="../../assets/NewsDetailsImage/home.png" alt="">
          <div>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>专项服务</el-breadcrumb-item>
                <el-breadcrumb-item>仪器设备</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
      </div>
      <div class="details-show">
          <div class="show-left">
              <img :src="itemList.image" alt="">
              <div>{{name}}</div>
          </div>
          <div class="show-right" >
              <div v-for="(item,index) in itemList.top_content" :key='index' class="msg">
                  {{index}}:{{item}}
              </div>
              <div class="phn">
                  <img src="../../assets/InstrumentDetailsImg/phone.png" alt="">
                  <div>
                      <span>{{itemList.mobile}}</span>
                      <span>检验检测服务平台认证，请放心拨打</span>
                  </div>
              </div>
              <div class="btn">
                  <img src="../../assets/InstrumentDetailsImg/zixun.png" alt="" @click="showPhone">
                  <img src="../../assets/InstrumentDetailsImg/liuyan.png" alt="" @click="goApplyItem" >
                  <!-- <img src="../../assets/InstrumentDetailsImg/zaixian.png" alt=""> -->
              </div>
          </div>
      </div>
      <div class="details-item">
          <img src="../../assets/InstrumentDetailsImg/leftioc.png" alt="">
          <span>产品展示</span>
      </div>
      <div class="details-content">
          <p v-html="itemList.center_content"></p>
      </div>
      <div>
          <Footer></Footer>
      </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
export default {
    name:'InstrumentDetails',
    data(){
        return {
            id:'',
            spec_id:'',
            name:'',
            itemList:{},
            json:''
        }
    },
    name:'InstrumentDetails',
    created(){
        this.id  = this.$route.query.id
        this.spec_id  = this.$route.query.spec_id
        this.name = this.$route.query.name
        this.$axios({
            url:'/Index/SpecDetail',
            method:'POST',
            data:{
                id:this.id,
                spec_id:this.spec_id
            }
        }).then(res =>{
            this.itemList = res.data
            
        })
    },
    components:{
        Header,
        Footer
    },
    methods:{
        goApplyItem(){
            this.$router.push('/applyitem')
        },
        showPhone(){
            this.$alert(this.itemList.mobile, '请拨打咨询电话：', {
             confirmButtonText: '确定'
            })
        }
    }
}
</script>
<style style='less'>
.el-button--primary{
    background-color: #0D3471!important;
    border-color: #0D3471!important;
    
}
.el-button--primary:hover{
    background-color: #0D3471;
    border-color: #0D3471;
}
.el-message-box__content{
    font-size: 24px!important;
}
</style>
<style lang='less' scoped>
.instrument-details{
  .details-top{
     width: 1200px;
     margin: 20px auto;
     margin-top: 30px; 
     display: flex;
     img{
        margin-top: -7px;
        margin-right: 10px;
     }
   }
   .details-show{
       width: 1200px;
       margin: 0 auto 70px;

       display: flex;
       justify-content: space-between;
       .show-left{
           width: 600px;
           height: 450px;
           background-color: #F4F4F4;
           border-radius: 15px;
           text-align: center;
           img{
               width: 560px;
               height: 350px;
               margin: 23px 20px;
           }
           div{
               font-size: 24px;
               margin-bottom: 30px;
               color: #333;
           }
       }
       .show-right{
           position: relative;
           width: 550px;
           height: 450px;
           justify-content: space-around;
           background-color: #fff;
           box-sizing: border-box;
           text-align: left;
           padding: 47px 22px 54px 45px;
           border-radius: 15px;
           box-shadow: -1px 1px 1px 1px rgba(16,16,16,.1);
          .msg{
              display: inline-block;
              width: 50%;
              font-size: 24px;
              color: #666;
              height: 30px;
              margin: 20px 0;
           }
           .phn{
               width: 92%;
               position: absolute;
               left: 55%;
               bottom: 120px;
               transform: translate(-50%);
               width: 500px;
               display: flex;
               margin-top: 20px;
               img{
                   width: 36px;
                   height: 36px;
                   vertical-align: middle;
                   margin-top: 20px;
                   margin-right: 20px;
               }
               div:nth-child(2){
                   display: flex;
                   flex-direction: column;
                   span:nth-child(1){
                       color: #F16A0C;
                       font-size: 36px;
                   }
                   span:nth-child(2){
                       font-size: 16px;
                       color: #999;
                   }
               }
           }
           .btn{
               width: 92%!important;
               position: absolute;
               bottom: 30px;
               display: flex;
               left: 81%;
               transform: translate(-50%);
               img{
                   width: 150px;
                   height: 38px;
                   margin: 0 10px;
               }
           }
       } 
   }
   .details-item{
       width: 1200px;
       height: 80px;
       margin: 0 auto;
       display: flex;
       align-items: center;
       padding-left: 27px;
       box-sizing: border-box;
       background-color: #0D3471;
       img{
           width: 10px;
           height: 30px;
           margin-right: 16px;
       }
       span{
           font-size: 30px;
           color: #fff;
       }
   }
   .details-content{
       width: 1200px;
       line-height: 42px;
       padding: 40px 10px 100px 15px ;
       box-sizing: border-box;
       margin: 0 auto;
       background-color: #F5F5F5;
       color: #666;
       font-size: 21px;
   }
}

</style>