<template>
  <div class="dynamic">
       <Header></Header>
       <div class="dynamic-header">
        <div class="header-search">
              <div>新闻中心</div>
              <ul >
                  <li v-for="(item,index) in itemList"
                   :key="index" :class="index===currentIndex ? 'active':''"
                   @click='changeIndex(index)'>{{item}}</li>
              </ul>
        </div> 
     </div>
     <div class="dynamic-content">
         <router-view></router-view>
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
  name:'Dynamic',
  data(){
      return {
          itemList:['政策法规','行业快报','本院动态'],
          currentIndex:0
      }
  },
  components:{
      Header,
      Footer
  },
  created(){
      this.$bus.$on('active',(index)=>{
          this.currentIndex = index
      })
  },
   methods:{
     changeIndex(index){
         this.currentIndex =index
         if(index === 0){
             this.$router.push('/newscenter/regulations')
         }else if(index === 1){
             this.$router.push('/newscenter/letters')
         }else{
             this.$router.push('/newscenter/newsitem')
         }
     }
   }
}
</script>

<style lang='less' scoped>
  .dynamic-header{
    position: relative;
    width: 100%;
    height: 600px;
    margin-bottom: 30px;
    background: url('../../assets/ConsultingIamge/swiper.png') no-repeat;
    background-size: 100% 100%;
    .header-search{
        position: absolute;
        display: flex;
        width: 1130px;
        justify-content: space-between;
        padding: 0 30px;
        bottom: 0;
        left: 49.7%;
        transform: translate(-50%);
        height: 55px;
        line-height: 55px;
        background-color: #fff;
        border: 1px solid #eee;
        border-radius: 15px;
        div{
            color: blue;
        }
        ul{
            display: flex;
            li{
                height: 30px;
                line-height: 30px;
                margin: 15px 10px 0 20px;
                padding-right: 50px;
                border-right: 1px solid #000;
            }
            li:last-child{
                border-right: none;
            }
        }
    }
  
  }
    .dynamic-content{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 80px;
    }
    .active{
        color: blue;
    }
</style>