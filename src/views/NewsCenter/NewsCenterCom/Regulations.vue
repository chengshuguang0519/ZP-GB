<template>
  <div class="regulations">
      <div class="regulations-top">
         <div>
             <h3>政策法规</h3>
             <span>COMPANY PROFILE</span>
          </div>
      </div>
      <div class="regulations-content">
          <div class="regulations-list"
          v-for="item in itemList" :key="item.id">
              <div class="regulations-date">
                  <span>{{item.day}}</span>
                  <span>{{item.month}}</span>
              </div>
              <div class="regulations-show">
                  <img :src="item.image" alt="">
              </div>
              <div>
                  <span class="right-content-title">{{item.title}}</span>
                  <span v-html="item.description" class="right-content-dec"></span>
                  <span v-html="item.content" class="right-content-item"></span>
              </div>
            <img src="../../../assets/PynamicImage/confim.png" alt=""  @click='goNewsDetails(item.id)' >
          </div>
          
      </div>
      
      <div class="pages">
          <el-pagination
           background
           :page-size="4"
           @current-change="handleCurrentChange"
           layout="prev, pager, next,total"
           :total="totalNum">
         </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
    name:'Regulations',
    data(){
        return {
            active:0,
            totalNum:0,
            current_page:1,
            last_page:0,
            per_page:0,
            itemList:[],
        }
    },
    created(){
        this.$bus.$emit('active',this.active)
        this.getList(1)       
    },
    methods:{
     goNewsDetails(id){
       this.$router.push(`/newsdetails/3?list=3&id=${id}`)
     },
     handleCurrentChange(val) {
         this.getList(val)
         window.scrollTo(0,0)
      },
     getList(val){
        this.$axios({
            url:'/Index/IndustryDynamics',
            method:'POST',
            data:{
                type:1,
                page:val
            }
        }).then(res =>{   
            this.totalNum = res.data.total
            this.current_page = res.data.current_page
            this.itemList =res.data.data
            this.per_page = res.data.per_page
            this.last_page =res.data.last_page
        })
      }
    }
}
</script>
<style lang='less'>
//兼容IE,防止文字过长
@media screen and(-ms-high-contrast: active), (-ms-high-contrast: none) {
    .right-content-item{
        height: 65px;
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
.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #020263!important;
}
</style>
<style lang='less' scoped>
.regulations{ 
    width: 1200px;
  .regulations-top{
    margin: 60px -20px 40px 0px;
    div:nth-child(1){
      display: flex;
      flex-direction: column;
      h3{
        font-size: 21px;
        font-weight: 400;
      }
      span:nth-child(2){
        margin-top: 8px;
        color: rgb(177, 176, 176);
      }
    }
   }
  .regulations-content{
      .regulations-list{
          position: relative;
          width: 100%;
          height: 210px;
          border: 1px solid #eee;
          box-shadow: -1px 1px 1px 1px rgba(100,100,100,.3);
          border-radius: 16px;
          margin: 30px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .regulations-date{
              display: flex;
              flex-direction: column;
              text-align: center;
              margin: 0 40px;
              span:nth-child(1){
                  font-size: 30px;
                  color: #a1a1a1;
              }
              span:nth-child(2){
                  margin-top: 5px;
                  color: #a1a1a1;
              }
          }
          .regulations-show{
              img{
                  width: 220px;
                  height: 170px;
                  margin-right: 10px;
              }
          }
          div:nth-child(3){
              display: flex;
              flex-direction: column;
              margin-left: 20px;
              padding-right: 20px;
              overflow: hidden;
              span:nth-child(1){
                  width: 98%;
                  font-size: 28px;
                  margin-bottom:10px ;
                  color: #424242;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
              }
               span:nth-child(2){
                  font-size: 18px;
                  line-height: 35px;
                  margin-bottom:10px ;
                  color: #a1a1a1;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
                 span:nth-child(3){
                  font-size: 18px;
                  line-height: 35px;
                  margin-bottom:10px ;
                  color: #a1a1a1;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }    
          }
          img:nth-child(4){
              position: absolute;
              width: 30px;
              height: 30px;
              bottom: 2px;
              right: 20px;
              background-color: #a1a1a1;
              border-radius: 50%;
          }
      }
  }
  .pages{
   width: 1200px;
   text-align: center;
   margin-top: 80px;
  }
  }
  
</style>