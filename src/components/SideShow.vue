<template>
  <div>
    <div class="sideRight"  v-if="sideShow" >
       <div @mouseenter="showItem(1)" @mouseleave="hidenItem(1)" :class="currentIndex==1?'active':'' ">
         <img src="../assets/sideShowImge/phone.png" alt="" v-if="currentIndex !=1">
         <img src="../assets/sideShowImge/phone1.png" alt="" v-else>
         <span>电话</span>
       </div>
       <div @mouseenter="showItem(2)" @mouseleave="hidenItem(2)" :class="currentIndex==2?'active':'' ">
         <img src="../assets/sideShowImge/QQ.png" alt=""  v-if="currentIndex !=2">
         <img src="../assets/sideShowImge/QQ1.png" alt="" v-else>
         <span>QQ</span>
       </div>
       <div @mouseenter="showItem(3)" @mouseleave="hidenItem(3)" class="last-item" :class="currentIndex==3?'active':'' ">
         <img src="../assets/sideShowImge/wechact.png" alt="" v-if="currentIndex !=3">
         <img src="../assets/sideShowImge/wechact1.png" alt="" v-else>
         <span>微信</span>
       </div>
       <div @click='toTop' class="gotop">
         <img src="../assets/sideShowImge/top.png" alt="">
         <div>TOP</div>
         <div>回顶部</div>
       </div>
    </div>
    <div :class="currentIndex==1?'showItem1':currentIndex==2?'showItem2':currentIndex==3?'showItem3':''  " v-if="show &&sideShow">
      <div v-if="currentIndex==1" >电话：{{phoneNum}}</div>
      <div v-if="currentIndex==2" @click="goQQ(`http://wpa.qq.com/msgrd?v=3&uin=${qqNum}&site=qq&menu=yes`)">联系QQ</div>
      <div v-if='currentIndex ==3'>
          <img :src="coderImg" alt="">
      </div>
      <img src="../assets/sideShowImge/sanjiao.png" alt="">
    </div>
  </div>
</template>


<script>
export default {
    name:'SideRight',
    data(){
        return {
           show:false,
           sideShow:false,
           gotop:false,
           currentIndex:0,
           phoneNum:'',
           qqNum:'',
           coderImg:'',
        }
    },
   mounted() {
       window.addEventListener("scroll", this.handleScroll, true);
  },
  created(){
      this.$axios({
        url:'index'
     }).then(res =>{
       this.qqNum = res.data.right.rightQQ
       this.coderImg = res.data.right.rightVX
     })
      this.$axios({
        url:'Index/back_mobile'
      }).then(res =>{
        this.phoneNum = res.data
      })
  },
  methods:{
    showItem(index){
      if(index == 1){
         this.currentIndex = 1  
         this.show =true
      }else if(index == 2){
        this.currentIndex = 2
        this.show =true
      }else if(index == 3){
        this.currentIndex = 3 
        this.show =true 
      }else{
        this.show =false
      }

    },
    hidenItem(index){
       if(index == 1){
         this.currentIndex = 1
         this.show =!this.show
      }else if(index == 2){
        this.currentIndex = 2
      }else if(index == 3){
        this.currentIndex = 3
        this.show =!this.show
      }
    },
    goQQ(src){
      window.location.href =src
    },
     handleScroll() {
      let scrolltop = document.documentElement.scrolltop || document.body.scrollTop || window.pageYOffset ;
      scrolltop > 30 ? (this.gotop = true ) : (this.gotop = false);
      scrolltop > 700 ? this.sideShow = true  : this.sideShow  = false;
      if(scrolltop<700){
        this.currentIndex = 0
      }
      
      },
     toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
}
</script>

<style lang='less' scoped>
.sideRight{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 239px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 15px;
  font-size: 10px;
  color: #666;
  border-radius: 10px;
  position: fixed;
  cursor: pointer;
  bottom: 200px;
  right: 0px;
  overflow: hidden;
  div{
    flex: 1;
    height: 44px;
    line-height: 20px;
    width: 100%;
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 22px;
      height: 22px;
      margin-top: 5px;
    }
  }
}
.last-item{
  border-bottom:1px solid #ddd;
}
.gotop{
  margin-top: 3px;
  img{
    width: 10px!important;
    height: 7px!important;
  }
  div{
    font-size: 10px;
    color: #015CAA;
  }
  div:last-child{
    margin-top: -5px;
  }
}
.showItem1{
  position: fixed;
  // width: 200px;
  height: 50px;
  padding: 0px 6px;
  line-height: 50px;
  right: 60px;
  bottom: 390px;
  background-color: #015CAA;
  color: #fff;
  text-align: center;
  z-index: 99;
  img{
    position: fixed;
    right: 45px;
    margin-top: -27px;
  }
}
.showItem2{
  position: fixed;
  height: 50px;
  padding: 0px 8px;
  line-height: 50px;
  right: 60px;
  bottom: 330px;
  background-color: #015CAA;
  color: #fff;
  text-align: center;
  z-index: 99;
  img{
    position: fixed;
    right: 45px;
    margin-top: -27px;
  }
}
.showItem3{
  position: fixed;
  width: 100px;
  height: 100px;
  line-height: 50px;
  right: 60px;
  bottom: 240px;
  border: 2px solid #015CAA;
  text-align: center;
  z-index: 99;
  div{
    width: 100%;
    height: 100%;
    text-align: center;
    >img{
      width: 100px;
      height: 100px;
      margin-right: 12px;
    }
  }
  >img{
    position: fixed;
    right: 45px;
    margin-top: -60px;
  }
}
.active{
  background-color: #015CAA;
  color: #fff;
}
</style>