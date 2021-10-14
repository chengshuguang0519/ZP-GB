<template>
  <div class="notice">
     <div class="notice-top">
        <span>知识问答</span>
        <span>COMPANY PROFILE</span>
     </div>
      <div class="notice-content" v-for="(item,index) of noticeList" :key="index">
       <div>
         <span>{{item.day}}</span>
         <span>{{item.month}}</span>
       </div>
       <div>
         <img :src="item.image" alt="">
       </div>
       <div>
         <span class="right-content-title">{{item.title}}</span>
         <span v-html="item.description" class="right-content-dec"></span>
         <span v-html="item.content" class="right-content-item"></span>
         <span @click="goNoticeDet(item.id)">详情</span>
       </div>       
     </div> 
      <div class="pages">
          <el-pagination
           background
           :page-size="4"
           @current-change="handleCurrentChange"
           layout="prev, pager, next,total"
           :total="total">
         </el-pagination>
      </div>   
  </div>
</template>

<script>
export default {
    name:'Notice',
    data(){
      return {
        active:0,
        noticeList:[],
        current_page:1,
        per_page:1,
        last_page:1,
        total:1
      }
    },
    created(){
      this.$bus.$emit('trainserver',this.active),
      this.getList(1)
    },
    methods:{
      goNoticeDet(id){
        this.$router.push(`/newsdetails/2?list=8&id=${id}`)
        },
      handleCurrentChange(val){
        this.getList(val)
        window.scrollTo(0,0)
      },
      getList(val){
       this.$axios({
        url:'/index/Knowledge',
        method:'POST',
        data:{
          page:val
        }
      }).then(res=>{
        this.noticeList = res.data.data
        this.current_page = res.data.current_page
        this.last_page = res.data.last_page
        this.per_page =res.data.per_page
        this.total =res.data.total
      })
      }
    },
    mounted(){
      
    }   
}
</script>
<style lang='less'>
//兼容IE,防止文字过长
@media screen and(-ms-high-contrast: active), (-ms-high-contrast: none) {
    .right-content-item{
        height: 75px;
        overflow: hidden;
    }
    .right-content-title,
    .right-content-dec{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 26px;
    }
}
</style>
<style lang='less' scoped>

.notice{
  .notice-top{
    display: flex;
    flex-direction: column;
    margin: 20px;
    span{
      color: #424242;
      margin-bottom: 5px ;
    }
    span:nth-child(1){
      color: #000;
      font-size: 28px;
    }
  }
  .notice-content{
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    width: 96%;
    height: 210px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid #faf9f9;
    border-radius: 15px;
    box-shadow: -1px 1px 1px 1px rgba(100,100,100,.3);
    div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #a09e9e;
        margin: 0 30px;
        span{
          margin-bottom: 5px;
        }
        span:nth-child(1){
          font-size: 50px;
        }
    }
   
    div:nth-child(2){
      width: 230px;
      height: 170px;
      img{
        width: 230px;
        height: 170px;
      }
    }
    div:nth-child(3){
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      height: 210px;
      overflow: hidden;
      span{
        color: #a09e9e;
      }
      span:nth-child(1){
        width: 95%;
        color: #424242;
        font-size: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span:nth-child(2){
        font-size: 20px;
        margin-top: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      span:nth-child(3){
        font-size: 21px;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      span:nth-child(4){
         position: absolute;
         bottom: 6px;
         right: 20px;
         text-align: center;
         width: 100px;
         border: 1px solid #05056d;
         color: #000;
         border-radius: 15px;

      }
    }
    
  }
}

 .pages{
   width: 1200px;
   text-align: center;
   margin-top: 80px;
  }
/deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #020263 !important;
}
</style>