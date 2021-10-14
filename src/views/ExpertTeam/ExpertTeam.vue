<template>
  <div class="experteam">
      <Header></Header>
      <div class="experteam-header">
          <div class="header-top">
              <img src="../../assets/ConsultingIamge/swiper.png" alt="">
          </div>
          <div class="header-item">
              <span>专家团队</span>
              <img src="../../assets/ExpertTeamImg/user.png" alt="">
          </div>
          <div class="experteam-content">
                <div class="list" v-for="item,index in itemList" :key="index"  @mouseenter="showPop(index)" @mouseleave="leavePop(index)">  
                    <img :src="item.image" alt="">
                    <div>{{item.name}}</div>
                    <div>
                        <span>{{item.title}}</span>
                        <span>{{item.education}}</span>
                    </div>
                    <div class="popShow" v-if="item.isShow">
                        <span>{{item.description}}</span>
                    </div>
                </div>
                            
          </div>
           <div class="pages">
            <el-pagination
              background
              :page-size="8"
              @current-change="handleCurrentChange"
              layout="prev, pager, next,total"
              :total="totalNum">
            </el-pagination>
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
    name:'ExpertTeam',
    data(){
        return {
            totalNum:0,
            current_page:1,
            last_page:0,
            per_page:0,
            itemList:[],
        }
    },
    created(){
       this.getList(1)
    },
    methods:{
    //点击下一页
    handleCurrentChange(val) {
         this.getList(val)
         window.scrollTo(0,0)
      },
    //获取数据封装
    getList(val){
        this.$axios({
            url:'/index/ExpertTeams',
            method:'POST',
            params:{
                page:val
            }
        }).then(res =>{
             this.totalNum = res.data.total
            this.current_page = res.data.current_page
            this.itemList =res.data.data
            this.itemList.forEach(v => {
                v.isShow =false
                return
            })
            this.per_page = res.data.per_page
            this.last_page =res.data.last_page
        })
    },
    //显示专家简介
    showPop(i){
        this.itemList[i].isShow = true
        //当函数不奏效时，让函数立即强制执行
        this.$forceUpdate()
    },
    //隐藏专家简介
    leavePop(i){
        this.itemList[i].isShow = false
        this.$forceUpdate()
    },
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style lang='less'>
.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #020263!important;
}
</style>
<style lang='less' scoped>
.experteam-header{
  .header-top{
      width: 100%;
      height: 600px;
      margin-bottom: 20px;
      &>img{
          width: 100%;
          height: 600px;
      }
  }
  .header-item{
      width: 1200px;
      margin: 0 auto;
      padding-bottom: 10px;
      border-bottom: 3px solid #021F6E;
      border-radius: 1px;
      &>span:nth-child(1){
          font-size: 32px;
          color:#021F6E ;
          margin-right: 7px;
      }
      &>img:nth-child(2){
          width: 24px;
          height: 30px;
          vertical-align: sub;
      }
  }
  .experteam-content{
      width: 1200px;
      margin: 30px auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .list{
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 280px;
          height: 400px;
          background-color: #F3F3F3;
          border-radius: 15px;
          margin-top: 20px;
          margin-right: 20px;
          &>img:nth-child(1){
              width: 150px;
              height: 200px;
          }
          &>div:nth-child(2){
              font-size: 36px;
              color: #021F6E;
          }
          &>div:nth-child(3){
              margin-bottom: 20px;
              color: #333;
              font-size: 30px;
              font-size: 30px;
              span:nth-child(1){
                  margin-right: 28px;
              }
          }
          .popShow{
              width: 100%;
              height: 100%;
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 24px;
              color: #fff;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.8);
              border-radius: 15px;
              span:nth-child(1){
                  width: 238px;
                  height: 264px;
                  line-height: 40px;
                  margin-left: 10px;
              }
        }
      }
  }
}

  .pages{
   width: 1200px;
   margin: 80px auto;
   text-align: center;

  }
</style>