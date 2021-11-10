<template>
  <div class="certificate-query">
      <div class="query-top">中培国实（北京）检验检测技术研究院证书查询</div>
      <div class="query-header">
          <div>
              <span>姓名：{{itemList.list[0].name}}</span>
              <span>证件号码：{{itemList.list[0].idnum}}</span>
          </div>
          <span @click='goBack'>返回上一级</span>
      </div>
     <div class="query-content">
         <div class="query-item" v-for="(item,index) in itemList.list" :key="index">
            <div>
                 <span :title="item.project">{{item.project}}</span>
                 <span></span>
                 <span @click="GoDetails(item.name,item.cardnum)">立即查询</span>
            </div>
         </div>
     </div>
      <div>
          <Footer></Footer>
      </div> 
  </div>
</template>

<script>
import Footer from '../../../components/Footer.vue'
export default {
    name:'CertificateQuery',
    data(){
        return{
            itemList:{}
        }
    },
    components:{
        Footer
    },
    created(){
        this.itemList = JSON.parse(localStorage.getItem('data')) 
        console.log(this.itemList,'itemList')
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        GoDetails(name,cardNum){
            console.log(name,cardNum)
            localStorage.setItem('name',name)
            localStorage.setItem('cardNum',cardNum)
            this.$router.push('/certificateQuery')
        }
    },
    Destroy(){
      this.itemList = this.$store.state.data
    }
}
</script>

<style lang='less' scoped>
    .certificate-query{
        .query-top{
            width: 100%;
            height: 80px;
            line-height: 80px;
            font-size: 32px;
            text-align: center;
            background-color: #021F6E;
            color: #fff;
        }
        .query-header{
            width: 1200px;
            height: 80px;
            line-height: 80px;
            margin: 0 auto;
            font-size: 23px;
            display: flex;
            text-align: center;
            justify-content: space-between;
            border-bottom: 1px dotted #999;
            margin-bottom: 18px;
            >div:nth-child(1){
                margin-top: 8px;
                color: #333333;
                font-size: 20px;
                >span:nth-child(1){
                    margin-left: 10px;
                }
                >span:nth-child(2){
                    margin-left: 60px;
                }
            }
            >span:nth-child(2){
                width: 136px;
                height: 38px;
                font-size: 24px;
                line-height: 38px;
                margin-top: 25px;
                border-radius: 8px;
                border: 1px solid #999999;
                color: #666666;
            }
        }
       .query-content{
           width: 1200px;
           margin: 38px auto  51px;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           .query-item{
               width: 380px;
               height: 180px;
               margin-bottom: 28px;
               background: url('../../../assets/CertificateImg/more.png');
               background-size: 100%;
               >div:nth-child(1){
                height: 180px;
                margin-left: 216px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                // text-align: right;
                >span:nth-child(1){
                    font-size: 21px;
                    font-weight: 700;
                    color: #333;
                    overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                }
                >span:nth-child(2){
                    width: 56px;
                    height: 8px;
                    margin-left: 70px;
                    border-radius: 10px;
                    background-color: #5A78EC;
                }
                >span:nth-child(3){
                    width: 114px;
                    height: 34px;
                    line-height: 34px;
                    margin-left: 10px;
                    text-align: center;
                    border: 1px solid #666666;
                    border-radius: 8px;
                }
               }
           }
       }
    }
</style>