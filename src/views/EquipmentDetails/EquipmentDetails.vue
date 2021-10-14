<template>
  <div class="equipment">
      <Header></Header>
       <div class="equipment-top">
          <img src="../../assets/EquipmentImage/banner.png" alt="">
      </div>
       <div class="equipment-content">
          <div class="content-item"  >
            
               <div>
                    <h3>{{name}}</h3>
                    <span class="e-name">EQUIPMENT AND INSTRUMENTS</span>
               </div>

               <div v-if="itemList.length > 0">
                   <img src="../../assets/EquipmentImage/left.png" alt="" >
                   <div class="item-show" >
                       <div @click='goInstrumentDetails(item.id,item.name)' v-for="item in itemList" :key="item.id">
                           <img :src="item.image" alt="">
                           <div>
                             <span>{{item.name}}</span>
                             <span>{{item.e_name}}</span>
                           </div>
                       </div>
                   </div>                   
                   <img src="../../assets/EquipmentImage/right.png" alt="">
              </div>

              <div v-else class="noItemList">
                    暂无数据
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
    name:'EquipmentDetails',
    data(){
        return{
            id:'',
            spec_id:'',
            name:'',
            itemList:[]
        }
    },
    components:{
        Header,
        Footer
    },
    created(){
        this.spec_id= this.$route.params.id
        this.name =this.$route.params.name
        this.$axios({
            url:'/Index/special_cate_list',
            method:'POST',
            data:{
                cate_id:this.spec_id
            }
        }).then(res => {
            this.itemList =res.data
            this.id = res.data.id
        })
    },
    methods:{
        goInstrumentDetails(id,name){
            if(this.name== '仪器设备'){
                this.$router.push(`/instrumentdetails?id=${id}&name=${name}&spec_id=${this.spec_id}`)
            }else{
                this.$router.push(`/instrumentdetail?id=${id}&name=${name}&spec_id=${this.spec_id}`) 
            }
            
        },
        goAbilityDetails(){
            this.$router.push('/abilitydetails')
        },
        goSurveyDetails(){
            this.$router.push('/surveydetails')
        },
        goConsumablesDetails(){
            this.$router.push('/consumablesdetails')
        }
    }
}
</script>

<style lang='less' scoped>
.equipment{
    .equipment-top{
         width: 100%;
         height: 600px;
         margin-bottom: 30px;
        img{
         width: 100%;
         height: 600px; 
        }
    }
    .equipment-content{
        width: 1349px;
        margin: 0 auto;
        margin-bottom: 120px;
        overflow: hidden;
        .content-item{
            display: flex;
            flex-direction: column;
            &>div:nth-child(1){
                margin-bottom: 120px;
              h3{
                height: 34px;
                font-size: 30px;        
                font-weight: 500;
                color: #333333;
                line-height: 36px;
                margin-left: 60px;
                margin-bottom: 7px;
              }
             .e-name{
                color: #999;
                font-size: 21px;
                font-weight: 400;
                margin: 10px 0;
                margin-left: 60px;   
              }
            }
           
            &>div:nth-child(2){
                width: 1349px;
                display: flex;
                text-align: center;
                align-items: center;
  
                .item-show{
                    width: 1200px;
                    display: flex;
                    flex-wrap: wrap;
                    margin:  0 auto;
                    overflow: hidden;
                    justify-content: flex-start;
                    padding: 8px;
                   
                    div{
                    width: 280px;
                    height: 349px;
                    box-shadow: -1px 1px 1px 1px rgba(100,100,100,.5);
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    text-align: center;
                    align-items: center;
                    margin-top: 20px;
                    margin-right: 20px;
                      img{
                        width: 102%;
                        height: 85%;
                        margin-top: -3px;
                        margin-right: 5px;
                    }
                    div:nth-child(2){
                        width: 100%;
                        height: 70px;
                        display: flex;
                        margin-left: 17px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        margin-top: -31px;
                        margin-bottom: -1px;
                        background-color: #021F6E;
                        border-top-right-radius:0;
                        border-top-left-radius:0;
                        border-bottom-right-radius: 15px;
                        border-bottom-left-radius: 15px;
                        span:nth-child(1){
                            color: #fff;
                            font-size: 19px;
                            margin-top: 6px;
                        }
                        span:nth-child(2){
                            color: #fff;
                            margin:0 auto;
                            font-size: 16px;
                            margin-top: -10px;
                        }
                    }
                    }
                }

            }
        }
    }
    .ability{
        .item-show{
            position: relative;
            width: 380px!important;
            height: 400px!important;
            box-shadow: none!important;
            img{
                width: 103%!important;
                height: 110%!important;
                margin-left: 1px;
            }
            div:nth-child(2){
                height: 60px;
                position: absolute;
                bottom: -1px;
                opacity: .9;
            }
        }
    }
    .approval{
        width: 100%;
        height: 605px;
        padding-top: 20px;
        margin-bottom: 100px;
        background-color: #E7EDFF;
    }
    .reagent{
        .item-show{
            img{
                width: 280px!important;
                height: 350px!important;
            }
            div:nth-child(2){
                height: 60px;
                width: 270px!important;
                position: absolute;
                bottom: 59px;
                opacity: .9;
            }
        }
    }
}
.noItemList{
    margin-left: 50%; 
    font-size: 28px;
    color: #999;
}
</style>