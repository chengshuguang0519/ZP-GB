<template>
  <div class="certificate-query">
      <div class="query-top">中培国实（北京）检验检测技术研究院证书查询</div>
      <div class="query-header">
          <span>查询结果</span>
          <span @click='goBack'>返回上一级</span>
      </div>
      <div class="information">
          <div>基本信息</div>
          <div class="item-message">
              <div class="message-top">
                  <span>姓名：{{itemList.name}}</span>
                  <span>性别：{{itemList.sex}}</span>
              </div>
              <div>
                  <span>政治面貌：{{itemList.outlook}}</span>
                  <span>国籍：{{itemList.city}}</span> 
              </div>
              <div>
                   <span>证件类型：{{itemList.cardtype}}</span>
                   <span>证件号码：{{itemList.idnum}}</span>
              </div>
              <div>
                  <img :src="itemList.image" alt="" v-if="itemList.image">
                  <img src="../../../assets/CertificateImg/none.png" alt="" v-else>

              </div>
          </div>
      </div>
      <div class="certificate">
          <div class="certificate-top">证书信息</div>
          <div>
              <span>证书编号：{{itemList.cardnum}}</span>
              <span>培训项目：{{itemList.project}}</span>
              <span>发证日期：{{itemList.gettime}}</span>
              <span>有效期：{{itemList.overtime}}</span>
          </div>
      </div>
       <div class="train">
           <div class="train-top">培训信息</div>
           <div>
               <div>
                   <span>培训课程：{{itemList.class}}</span>
                   <span>培训时长：{{itemList.longtime}}</span>                 
                   <span>培训地区：{{itemList.area}}</span>
               </div>
               <div>
                   <span>培训时间：{{itemList.dotime}}</span>
                   <span>培训机构：{{itemList.organ}}</span>
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
    },
    methods:{
        goBack(){
            this.$router.go(-1)
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
            font-size: 36px;
            text-align: center;
            background-color: #021F6E;
            color: #fff;
        }
        .query-header{
            width: 1200px;
            height: 80px;
            line-height: 80px;
            margin: 0 auto;
            font-size: 24px;
            display: flex;
            text-align: center;
            justify-content: space-between;
            color: #021F6E;
            border-bottom: 1px dotted #999;
            margin-bottom: 20px;
            span:nth-child(1){
                margin-top: 5px;
            }
            span:nth-child(2){
                width: 150px;
                height: 38px;
                line-height: 35px;
                margin-top: 25px;
                border-radius: 10px;
                border: 1px solid #021F6E;
            }
        }
        .information{
            width: 1205px;
            height: 310px;
            box-sizing: border-box;
            overflow: hidden;
            margin: 0 auto;
            margin-bottom: 35px;
            border: 1px solid #eee;
            border-top: none;
            border-radius: 15px;
            box-shadow: -1px 0px 1px 1px rgba(16,16,16,.1);
            div:nth-child(1){
                font-size: 24px;
                margin: 20px ;
                color: #333;
            }
            .item-message{
                display: flex;
                justify-content: space-between;
                margin-bottom: 32px;
               .message-top{
                   margin-left:20px ;
                   margin-top: 0;
               }
                div{
                    flex: 1;
                    display: flex;
                    height: 120px;
                    flex-direction: column;
                    justify-content: space-around;
                    font-size: 24px;
                    color: #333;
                }
                div:nth-child(3){
                    margin-top: 15px;
                    justify-content: flex-start;
                    span:nth-child(2){
                        margin-top: 35px;
                        white-space: nowrap;
                    }
                }
                div:nth-child(4){
                    img{
                        width: 160px;
                        height: 227px;
                        margin-left: 60px;
                    }
                }
            }
        }
        .certificate{
            width: 1200px;
            height: 175px;
            margin: 0 auto;
            margin-bottom: 47px;
            overflow: hidden;
            background-color: #F6F6F6;
            color: #333;
            font-size: 24px;
            border-radius: 15px;
            box-shadow: -1px 0px 1px 1px rgba(16,16,16,.1);
            div:nth-child(1){
                margin: 34px 0 31px 11px;
            }
            div:nth-child(2){
                display: flex;
                justify-content: space-around;

                span{
                    flex: 1;
                    margin-left:20px ;
                }
            }
        }
        .train{
            width: 1200px;
            height: 387px;
            margin: 0 auto;
            margin-bottom: 63px;
            overflow: hidden;
            font-size: 24px;
            color: #333;
            border: 1px solid #eee;
            border-top: none;
            border-radius: 15px;
            box-shadow: -1px 0px 1px 1px rgba(16,16,16,.1);
             div:nth-child(1){
                margin: 34px 0 31px 11px;
            }
            div:nth-child(2){
                display: flex;
                justify-content: space-around;
                margin-top: -20px;
                div{
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                }
                div:nth-child(1){
                    margin-left: 30px;
                    span{
                        margin: 10px 0;
                    }
                }
                div:nth-child(2){
                    margin-top: 45px;
                    margin-right: 30px;
                    justify-content: flex-start;
                    span{
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }
</style>