<template>
  <div class="news-details">
      <Header></Header>
      <div class="details-top">
          <img src="../../assets/NewsDetailsImage/home.png" alt="">
          <div>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if='firstName'>{{firstName}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if='lastName'>{{lastName}}</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
      </div>
      <div class="details-content">
          <p class="title" style="">{{itemList.title}}</p>
          <!-- <hr style="border: none;height: 1px;background-color: red;"> -->
          <p class="normal" v-html="itemList.content"></p>         
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
    name:'NewsDetails',
    data(){
        return{
            id:'',
            itemList:{},
            list:'',
            firstName:'',
            lastName:''
        }
    },
    components:{
        Header,
        Footer
    },
    created(){
      this.list = this.$route.query.list
      this.id = this.$route.query.id
      if(this.list == 1){
          this.firstName = '培训服务',
          this.lastName ='通知公告',
          this.$axios({
              url:'/index/NoticeDetail',
              method:'POST',
              data:{
                  id:this.id
              }
          }).then(res =>{
              this.itemList = res.data
          })
      }else if(this.list ==2){
           this.firstName = '培训服务',
           this.lastName ='下载中心',
           this.$axios({
              url:'/index/DownLoadDetail',
              method:'POST',
              data:{
                  id:this.id
              }
          }).then(res =>{
              this.itemList = res.data
          })
      }else if(this.list ==3){
            this.firstName = '新闻中心'
            this.lastName ='政策法规',
            this.getItmeList()
      }else if(this.list ==4){
            this.firstName = '新闻中心'
            this.lastName ='行业快报',
            this.getItmeList()
      }else if(this.list ==5){
            this.firstName = '新闻中心'
            this.lastName ='本院动态',
            this.getItmeList()
      }else if(this.list ==6){
            this.firstName = '新闻中心'
            this.lastName ='机构新闻',
            this.getItmeList()
      }else if(this.list ==7){
            this.firstName = '新闻中心'
            this.lastName ='行业动态',
            this.getItmeList()
      }else if(this.list ==8){
            this.firstName = '知识问答'
            this.lastName ='问答详情',
            this.$axios({
                url:'/index/KnowledgeDetail',
                method:'POST',
                data:{
                    id:this.id
                }
            }).then(res=>{
                 this.itemList = res.data
            })
      }else if(this.list == 9){
        //    this.firstName = '咨询服务'
            this.lastName ='法规依据详情',
            this.$axios({
                url:'/Index/StatuteDetail',
                method:'POST',
                data:{
                    id:this.id
                }
            }).then(res=>{
                 this.itemList = res.data
            })
      }
    },
    methods:{
        getItmeList(){
            this.$axios({
             url:'/Index/NewsDetail',
             method:'POST',
             data:{
                id:this.id
             }
            }).then(res =>{
            this.itemList = res.data
          })
        }
    }
}
</script>

<style lang='less' scoped>
/deep/hr{
    border: none;
    height: 1px;
    background-color: #e03e2d;
}
.details-top{
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    img{
        margin-top: -7px;
        margin-right: 10px;
    }
}
.details-content{
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 150px;
    .title{ 
      font-size:35px;
      margin: 50px 0 30px;

      text-align: center;
      color:#e03e2d;
    }
    .normal{
        margin-top:20px;
        font-size: 21px;
        line-height: 38px;
    }
    .blod{
       margin-top:20px;
        font-size: 21px;
        color: #3a3a3a;  
    }
    .item-right {
        float: right;
        margin-top:20px;
        font-size: 21px;
        color: #999;
    }
}
</style>