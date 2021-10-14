<template>
  <div class="consulting">
      <Header></Header>
     <div class="consulting-header">
        <div class="header-search">
              <div>专项服务</div>
              <ul >
                  <li v-for="(item,index) in itemList"
                   :key="index" :class="index===currentIndex ? 'active':''"
                   @click='changeIndex(index)'>{{item}}</li>
              </ul>
        </div> 
     </div>
     <div class="consulting-content">
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
   name:'Consulting',
   data(){
       return {
           itemList:['服务列表','立即咨询','案例体现'],
           currentIndex:0
       }
   },
   created(){
        this.$bus.$on('Consulting',(i) =>{
           this.currentIndex = i
       })
   },
   methods:{
     changeIndex(index){
         this.currentIndex =index
         if(index === 2){
             this.$router.push('/consulting/reflect')
         }else if(index ===0){
             this.$router.push('/consulting/list')
         }else{
             this.$router.push('/consulting/apply')
         }
     }
   },
   components:{
       Header,
       Footer
   }
}
</script>

<style lang='less' scoped>
  .consulting-header{
    position: relative;
    width: 100%;
    height: 600px;
    margin-bottom: 30px;
    background: url('../../assets/ConsultingIamge/swiper.png') no-repeat;
    background-size: 100% 100%;
    .header-search{
        position: absolute;
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 1130px;
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
            li:nth-child(3){
                border-right: none;
            }
        }
    }
  
  }
    .consulting-content{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 80px;
    }
    .active{
        color: blue;
    }
</style>