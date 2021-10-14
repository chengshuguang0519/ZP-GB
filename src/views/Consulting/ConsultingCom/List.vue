<template>
  <div class="list">
     <div class="list-header">
       <div>
         <h3>服务项目</h3>
         <span>COMPANY PROFILE</span>
      </div>     
     </div>
     <div class="header-top" >
         <div class="list-item " v-for="(item,index) in itemList" 
         :class="index==currentIndex? 'active':''"
         @click='changeItem(index,item.id)'
         :key="item.id">
            <span>{{item.e_name}}</span>
            <span>{{item.name}}</span>
            <img src="../../../assets/ConsultingIamge/fanhui.png" alt="" @click='goServerDeT(item.id)'>      
     </div>
     </div>
     <div class="list-top">
       <div>
         <h3>服务模块</h3>
         <span>COMPANY PROFILE</span>
       </div>
     </div>
     <div class="list-content">
       <div class="list-item"  v-for="(item1,index) in serverList" :key="index">
          <div v-for="(item2,index) in item1.service_modular" :key="index">
            <span>{{item2.name}}</span>
          </div>
         
       </div>
      
     </div>
  </div>
</template>

<script>
export default {
    name:'List',
    data(){
      return {
        id:'1',
        currentIndex:0,
        itemList:[],
        serverList:[],
        active:0,
      }
    },
    created(){
      this.$bus.$emit('Consulting',this.active)
      this.getItemList()
    },
    methods:{
      changeItem(index,id){
        this.currentIndex =index
        this.id = id
        this.getItemList()
      },
      getItemList(){
         this.$axios({
          url:'/Index/ConsultService'
         }).then(res => {
           this.itemList = res.data
           this.serverList = this.itemList.filter(v =>{
             if(this.id == v.id){
               return v.service_modular
            }
        })
      })
      },
      goServerDeT(id){
         this.$router.push(`/serverdetails/${id}`)
      }
    },
    
    
}
</script>

<style lang='less' scoped>
.list{
  .list-header{
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
  .header-top{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .list-item{
      display: inline;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 45%;
      height: 180px;
      margin: 20px;
      border-radius: 15px;
      text-align: center;
      box-shadow: -1px 1px 1px 1px rgba(100, 100, 100, .5) ;
      background-color: #fff;
      span{
        height: 20px;
        font-size: 24px;
        color: #333;
      }
      img{
        width: 36px;
        height: 36px; 
  
      }
     
    }
  }  
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
    .list-item{
      display: flex;
      flex-wrap: wrap;
       width: 100%;
      div{
         width: 45%;
         height: 200px;
         line-height: 200px;
         margin: 20px;
         border-radius: 15px;
         text-align: center;
         box-shadow: -1px 1px 1px 1px rgba(100, 100, 100, .5) ;
         background-color: #fff;  
        span{
          margin-left: 10px;
          font-size: 18px;
          color: #666;
        }
      }
    }
  }
}
.active{
  background-color:#DAE3F6!important;
}
</style>