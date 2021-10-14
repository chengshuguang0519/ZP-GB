<template>
  <div class="case">
        <Header></Header>
        <div class="details-top">
          <img src="../../assets/NewsDetailsImage/home.png" alt="">
          <div>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>专项服务</el-breadcrumb-item>
                <el-breadcrumb-item>案例体现</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
        </div>
        <div class="content">
            <h3>{{caseList.title}}</h3>
            <div>
                <span>签约时间：{{caseList.sign_time}}</span>
                <span>签约地点：{{caseList.sign_addr}}</span>
            </div>
            <div>
               
                <p v-html="caseList.content"></p>
            </div>
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
    name:'CaseDetails',
    data(){
        return {
            id:'',
            caseList:{}
        }
    },
    components:{
        Header,
        Footer
    },
    created(){
        this.id = this.$route.params.id
        this.$axios({
            url:'/Index/CaseDetail',
            method:'POST',
            data:{
                id:this.id
            }
        }).then(res =>{
            this.caseList =res.data
        })
    }
}
</script>

<style lang='less' scoped>
.case{
  .details-top{
     width: 1200px;
     margin: 20px auto;
     margin-top: 30px; 
     margin-bottom: 30px;
     display: flex;
     img{
        margin-top: -7px;
        margin-right: 10px;
     }
   }
   .content{
       width: 1200px;
       padding: 0 20px;
       box-sizing: border-box;
       margin: 0 auto;
       margin-bottom: 100px;
       text-align: center;
       h3{
           font-size: 24px;
           margin-bottom: 32px ;
       }
       div:nth-child(2){
           font-size: 18px;
           color: #999;
           margin-bottom: 47px;
           span{
               margin: 0 86px;
           }
       }
       div:nth-child(3){
           font-size: 24px;
           line-height: 50px;
           text-align: left;
           color: #666;
           p{
               text-indent: 2em;
           }
       }
   }
}
</style>