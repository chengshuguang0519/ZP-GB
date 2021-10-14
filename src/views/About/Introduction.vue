<template>
  <div class="about">
       <Header></Header>
       <div class="about-top">
          <div class="about-search">
              <div>关于中培</div>
              <div >
                <span  v-for="(item,index) in items" :key="index" :class="index===currentIndex?'active':''" @click='itemChange(index)'>{{item}}</span>
              </div>
          </div>
       </div>
        <div>
        <div class="about-synopsis" >
            <div class="synopsis-title" >
              <h3>{{contentList[0].name}}</h3>
              <span>{{contentList[0].e_name}}</span>
            </div>
            <div class="synopsis-right">
              <img :src="imgList[0]" alt="">
              <span v-html="contentList[0].content"></span>
            </div>
        </div>
        <div class="about-location">
           <div class="location-left">
                <div class="item-title">
                  <h3>{{contentList[1].name}}</h3>
                  <span>{{contentList[1].e_name}}</span><br>
                  <span v-html="contentList[1].content"></span>
                </div>
                <div class="item-concept">
                  <h3>{{contentList[2].name}}</h3>
                  <span>{{contentList[2].e_name}}</span><br>
                   <span v-html="contentList[2].content"></span>
                </div>
               <div class="item-concept">
                  <h3>{{contentList[3].name}}</h3>
                  <span>{{contentList[3].e_name}}</span><br>
                  <span v-html="contentList[3].content"></span>
                </div>
           </div>
           <div class="location-right">
             <img :src="imgList[1]" alt="">
           </div>
        </div>
        <div class="about-introduce">
          <div class="item-left">
            <img :src="imgList[2]" alt="">
          </div>
          <div class="item-right">
            <h3>{{contentList[4].name}}</h3>
            <span>{{contentList[4].e_name}}</span><br>
            <span v-html="contentList[4].content"></span>
          </div>
        </div>
        <div class="about-business">
          <div class="item-left">
            <h3>{{contentList[5].name}}</h3>
            <span>{{contentList[5].e_name}}</span><br>
            <span style="margin-top:30px;" v-html="contentList[5].content"></span>
          </div>
          <div class="item-right">
            <img :src="imgList[3]" alt="">
          </div>
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
  name:'Introduction',
  data(){
    return {
      items:['机构简介','证书查询'],
      imgList:[],
      contentList:[],
      currentIndex:0
    }
  },
  created(){
      this.$axios({
       url:'/Index/AboutUs',
      }).then(res=>{
      this.imgList = res.data.image
      this.contentList =res.data.list
      })
  },
  components:{
    Header,
    Footer
  },
  methods:{
    itemChange(index){
      this.currentIndex = index
      if(index ===1 ){
        this.$router.push('/certificate')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.about-top{
  width: 100%;
  height:600px;
  margin-bottom: 60px;
  position: relative;
  background: url('../../assets/AboutImage/banner.png') no-repeat;
  background-size: 100% 100%;
  .about-search{
    width: 1200px;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    border: 1px solid #eee;
    position: absolute;
    left: 50%;
    bottom: 0px;
    border-radius: 20px;
    transform: translate(-50%);
    display: flex;
    justify-content: space-between;
    div:nth-child(1){
      margin-left: 40px;
      color: blue;
    }
    div:nth-child(2){
      width: 200px;
      display: flex;
      justify-content: space-around;
      margin-right: 20px;
      span{
        height: 30px;
        line-height: 30px;
        margin-top: 15px;
        padding-right: 20px;
        border-right: 1px solid #000;
      }
     span:nth-child(2){
       border-right: none;
     }
    }
  }
}
.about-synopsis{
width: 1200px;
margin: 0 auto;
margin-top: 50px;
.synopsis-title{
  line-height: 30px;
  margin-bottom: 30px;
  h3{
    font-size: 24px;
  }
  span{
    color: #929292;
  }
}
.synopsis-right{
  display: flex;
  justify-content: space-between;
  img{
    width: 40%;
    height: 40%;
  }
  span{
    width: 45%;
    color: #929292;
    margin-left: 150px;
    font-size: 18px;
    line-height: 45px;
  }
}
}
.about-location{
  width: 1200px;
  height: 600px;
  margin: 120px auto;
  display: flex;
  justify-content: space-between;
  .location-left{
  width: 450px;
  height: 600px;
  line-height: 40px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
 div{
   margin: 10px 0 20px 0;
   h3{
     margin-bottom: -8px;
   }
 }
  h3{
    font-size: 24px;
  }
  span{
    color: #929292;
    font-size: 18px;
    margin-bottom: -10px;
  }
}
  .location-right{
    img{
      width: 460px;
      height: 600px;
      
    }
  }
}
.about-introduce{
  width: 1200px;
  margin: 0 auto 10px;
   margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
   .item-left{
     width: 40%;
     height:40%;
     img{
      width:100%;
      margin-top: 20px;
     }
   }
   .item-right{
    width: 500px;
    height: 407px;
    line-height: 45px;
    margin-left: 180px;
    h3{
    font-size: 24px;
     margin-bottom: -10px;
    }
    span{
     color: #929292;
     font-size: 18px;
     }
   }
}
.about-business{
  width: 1200px;
  margin: 0 auto 10px;
  margin-top: 60px;
  height: 600px;
  display: flex;
  justify-content: space-between;
   .item-right{
     width: 40%;
     height:40%;
     img{
      width:100%;
      margin-top: 20px;
     }
   }
   .item-left{
    width: 500px;
    height: 600px;
    line-height: 45px;
    margin-right: 65px;
    h3{
    font-size: 24px;
    margin-bottom: -10px;
    }
    span{
     color: #929292;
     font-size: 18px;
     }
   }
}

.active{
  color: blue;
}
</style>