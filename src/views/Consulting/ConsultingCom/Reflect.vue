<template>
  <div class="reflect">
       <div class="reflect-top">
          <div>
             <h3>案例体现</h3>
            <span>COMPANY PROFILE</span>
           </div>
       </div>
       <div class="reflect-content">
           <div class="list-item" v-for="item in showList" :key='item.id'>
               <div class="content-top">{{item.name}}</div>
               <div class="content-low">
                  
                   <div class="low-title"  v-for="(item2,index) in item.json" :key="index">                       
                       <span>{{index}} : {{item2}}</span>
                   </div>
                   <div class="more" @click='goCaseDetails(item.id)'>查看更多</div>
              </div>
           </div> 
       </div>
  </div>
</template>

<script>
export default {
    name:'Reflect',
    data(){
        return{
            showList :[],
            active:2
        }
    },
    methods:{
        goCaseDetails(id){
            this.$router.push(`/casedetails/${id}`)
        }
    },
    created(){
      this.$bus.$emit('Consulting',this.active)
      this.$axios({
        url:'/Index/CaseReflect',
        method:'POST',
        data:{
          type:1
       }
      }).then(res => {
        this.showList =res.data
     })
   }

}
</script>

<style lang='less' scoped>
.reflect{
   
  .reflect-top{
    margin: 60px -20px 0px 30px;
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
  .reflect-content{
      display: flex;
      flex-wrap: wrap;
      margin-left: 20px;
       margin-bottom: 30px;
      .list-item{
         position: relative;
         width: 30%;
         height: 500px;
         margin: 20px 35px 20px 0;
      .content-top{
          position: relative;
          width: 200px;
          height: 130px;
          line-height: 120px;
          border-radius: 15px;
          top: 50px;
          left: 40%;
          transform: translate(-50%);
          z-index: 99;
          background-color: skyblue;
          opacity: .8;
          text-align: center;
          color: rgb(4, 4, 85);
          font-size: 18px;
          font-weight: bold;
        }
      .content-low{
          position: absolute;
          width: 300px;
          height: 400px;
          border-radius: 20px;
          background-color: #fff;
          border: 1px solid #eee;
          box-shadow: -1px 1px 1px 1px rgba(100, 100, 100, .6);
          display: flex;
          flex-direction: column;
          overflow: hidden;
         div:nth-child(1){
            margin-top: 70px;
         }
         div{
             margin: 30px 0;
         }
          .low-title{ 
              margin-top: 10px;
              margin-left: 20px;
              span{
                  margin: 15px 0;
                  color: #666;
              }
              span:nth-child(1){
                  margin-top: 80px;
              }
          }
          .more{
              width: 150px;
              height: 40px;
              line-height: 40px;
              background-color: rgb(5, 5, 77);
              border-radius: 13px;
              margin-top: 20px;
              margin-left: 80px;
              text-align: center;
              color: #fff;
          }
       }
    }   
  }
}
</style>