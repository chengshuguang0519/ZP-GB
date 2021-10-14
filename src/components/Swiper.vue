<template>
  <div class="swiper">
       <el-carousel indicator-position="none" height='580px'
       autoplay loop 
       >
        <el-carousel-item v-for="item,index in swiper" :key="index">
            <img :src="item" alt="">
       </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
    name:'Swiper',
    props:{
        swiper:{
            type:Array
        }
    },
    created(){
      
    }
}
</script>

<style lang='less' scoped>
img{
    width: 100%;
    height: 600px;
    display: table-cell;
}
.swiper{
    width: 100%;
    height: 600px;

}
/deep/.el-carousel__container{
    height: 600px!important;
}
/deep/.el-carousel-item{
    width: 100%!important;
    img{
        width: 100%;
        height: 800px;
    }
}
</style>