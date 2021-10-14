<template>
  <div class="topShow">
       <div class="server-top">
           <img src="../assets/HomeImage/left.png" alt="">
           <span>{{title}}</span>
           <img src="../assets/HomeImage/right.png" alt="">
        </div>
  </div>
</template>

<script>
export default {
   name:'TopShow',
   props:{
       title:{
        type:String
   }
   },
   created(){
     
   }
}
</script>

<style lang='less' scoped>
 .server-top{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    img{
      vertical-align: middle;
      margin-bottom: 10px;
    }
    span:nth-child(2){
      width: 100px;
      height: 25px;
      font-size: 25px;
      margin: 10px;   
    }
  }
</style>