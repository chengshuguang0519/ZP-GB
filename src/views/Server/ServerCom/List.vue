<template>
  <div class="list">
     <div class="list-top">
       <div>
         <h3>服务项目</h3>
         <span>COMPANY PROFILE</span>
       </div>
     </div>
     <div class="list-content" >
       <div class="list-item" v-for="item in ListItem" 
       :key='item.id' @click='goEquipment(item.id,item.name)'>
          <div>
            <img :src="item.icon_image" alt="">
            <span>{{item.name}}</span>
          </div>
          <img src="../../../assets/ConsultingIamge/fanhui.png" alt="">
       </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'List',
    data(){
      return {
        ListItem:[],
        active:0
      }
    },

   created(){
     this.$axios({
       url:'/Index/SpecialList'
     }).then(res => {
       this.ListItem =res.data
     })
   },
   methods:{
     goEquipment(id,name){
       this.$router.push(`/equipment/${id}/${name}`)
     }
   }
}
</script>

<style lang='less' scoped>
.list{
  .list-top{
    margin: 40px 0 20px 30px;
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
  .list-content{
    display: flex;
    flex-wrap: wrap;
    
    width: 100%;
    .list-item{
      display: flex;
      justify-content: space-around;
      width: 46%;
      height: 200px;
      line-height: 200px;
      margin: 20px;
      border-radius: 15px;
      text-align: center;
      box-shadow: -1px 1px 1px 1px rgba(100, 100, 100, .5) ;
      background-color: #fff;
      div:nth-child(1){
        margin-left: 20px;
        img{
          width: 50px;
          height: 50px;
          vertical-align: middle;
          margin-top: -10px;
        }
        span{
          margin-left: 10px;
          font-size: 18px;
          color: #868686;
        }
      }
      img:nth-child(2){
        width: 50px;
        height: 50px;
        margin-top: 13%;
      }
    }
  }
}
</style>