<template>
  <div class="server-details">
      <Header></Header>
      <div class="details-top">
          <img src="../../assets/ServerDetailsImg/banner.png" alt="">
      </div>
      <!-- 检测服务周期模块 -->
      <div class="details-content">
          <div class="content-top">
              <div class="item-left">
                  <img :src="image" alt="">
              </div>
              <div class="item-right">
                  <span :title="title">{{title}}</span>
                  <span v-html="content" class="right-content-item" :title="content"></span>
                  <!-- <span>在线咨询</span> -->
              </div>
          </div>
      </div>
      <!-- 服务模块 -->
      <div class="server">
          <div class="server-top">
              <h3>服务模块</h3>
              <span>COMPANY PROFILE</span>
          </div>
          <div class="server-content">
              <div class="item-list" v-for="(item,index) in serverList" :key="index"
               @click='getservice(item.name,index)' :class="index==currentIndex?'active':''"
              >{{item.name}}</div>
          </div>
      </div>
      <!-- 服务流程模块 -->
      <div class="process">
          <div class="process-top">
              <h3>服务流程</h3>
              <span>SERVICE PROCESS</span>
          </div>
          <div class="process-content">
              <div class="process-item" v-for="(item,index) in processList" :key="index" :class="[item.length>6?'active1':'',processIndex == index?'active2':'' ]"  @click='processChange(index)'>
                  <span> {{item}}</span>
              </div>
          </div>
      </div>
     <div class="chooseMe">
        <img :src="service_image" alt="">
     </div>
      <!-- 法规依据模块 -->
      <div class="basis">
        <div class="basis-top">
           <h3>法规依据</h3>
           <span>REGULATORY BASIS</span>
        </div>
        <div class="basis-content">
          <div class="basis-item" v-for="(item,index) in statuteList" :key="index" @click='statuteItemChange(index,item.id)'> 
              <span :class="statuteIndex ==index? 'active3':'' ">{{item.title}}</span>
              <span>{{item.createtime}}</span>
          </div>
        </div>
      </div>


      <!-- 咨询留言模块 -->
      <div class="consults">
          <div class="consults-top">
              <h3>咨询留言</h3>
              <span>COMPANY PROFILE</span>
          </div>
          <div class="consults-content">
            <div  class="apply-form">
             <el-form ref="form" :model="form"  >
                <el-form-item label="您的姓名:" class="input" prop="name" >
                   <el-input v-model="form.name" style="width: 50%;"></el-input>
                </el-form-item>
               <el-form-item label="联系方式:" prop="mobile">
                  <el-input v-model="form.mobile" style="width: 50%;"></el-input>
              </el-form-item>
              <el-form-item label="您的邮箱:" prop="email">
                  <el-input v-model="form.email" style="width: 50%;"></el-input>
              </el-form-item>
              <el-form-item label="问题描述:" prop="description" class="textarea">
                 <el-input type="textarea" v-model="form.description" class="item-textarea"></el-input>
             </el-form-item>  
               <div class="tipShow">(提交信息后1个工作日内,会有专人与您联系,也可致电{{phone}}联系客服)</div>
             <el-form-item>
              <el-button @click="onSubmit" >立即提交</el-button>     
             </el-form-item>
            </el-form>
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
    name:'ServerDetails',
    data(){
        return {
            id:'',
            title:'',
            content:'',
            image:'',
            serverList:[],
            currentIndex:0,
            index:'',
            form:{
               name:'',
               mobile:'',
               email:'',
               description:'',
               service_modular:'初级认证咨询全包'
           },
           phone:'',
           processList:['需求沟通','现状调研','方案报价','签订合同','标准导入、体系编写、运行指导、内审管评、模拟评审、整改指导','售后服务'],
           processIndex:0,
           statuteList:[],
           statuteIndex:'',  
           service_image:''       
        }
    },

    methods:{
        onSubmit(){
           //咨询留言
          this.$axios({
             url:'/Index/AdvisoryMessage',
             method:'POST',
             data:{
             ...this.form
            }
         }).then(res =>{
           this.msg = res.msg
            if(res.code == 0){
             this.$message({
            message:this.msg,
            type:'error'
           })
          }else{
          this.$refs.form.validate((res)=>{
            if(res){
              this.$refs.form.resetFields()
              this.$message({
                message:this.msg,
                type:'success'
              })
            }
          })
        }
         })
        },
        getservice(name,index){
          this.currentIndex = index
          this.form.service_modular = name?name:'初级认证咨询全包'
        },
       getData(){
         this.$axios({
          url:'/Index/ConsultDetail',
          method:'POST',
          data:{
              id:this.id
         }
       }).then(res =>{
         console.log(res,'res1')
          this.title = res.data.title 
          this.form.project =this.title 
          this.content = res.data.content
          this.image = res.data.image
          this.serverList = res.data.service_modular  
          this.statuteList =res.data.statute
          this.service_image = res.data.service_image

      })
      },   
      processChange(index){
        this.processIndex = index
      },
      statuteItemChange(index,id){
         this.statuteIndex = index
         this.$router.push(`/newsdetails/2?list=9&id=${id}`)
      }
    },
    components:{
        Header,
        Footer
    },
    created(){
      this.id = this.$route.params.id
      this.$axios({
        url:"Index/back_mobile",
        }).then(res => {
          this.phone = res.data
       })
      this.getData()
    },
    watch: {
     $route (to, from) {
       this.$router.go(0)
      }
     }
}
</script>
<style lang='less'>
//兼容IE,防止文字过长
@media screen and(-ms-high-contrast: active), (-ms-high-contrast: none) {
    .right-content-item{
          height:200px ;
          margin-top: 10px;
          overflow: hidden;
        // 以下代码对IE不生效
          // text-overflow: ellipsis;
          // display: -webkit-box;
          // -webkit-line-clamp: 4;
          // -webkit-box-orient: vertical;
      }
      //修改IE下输入框长度
        .el-textarea__inner{
          width: 109%!important;
        }
    }
.form-item{
  width: 1200px;
  display: flex;
  .input{
    width: 70%;
    .el-form-item__content{
      width: 230%!important;

    }
  }
   div:nth-child(2){
     margin-right: 400px;
     width: 40%;
    .el-form-item__content{
      width: 70%;
      .el-radio-group{
        width: 40%!important;
      }
    } 
  }
}

.textarea{
  display: flex;
  .item-textarea{
    width: 240%;
  }
}
.el-button{
  margin-left: 220px;
  background-color: #080880;
  color: #fff;
}
.el-form-item__error{
  margin-left: 240px;
}
</style>

<style lang='less' scoped>

.server-details{
    .details-top{
        width: 100%;
        height: 600px;
        margin-bottom: 84px;
        img{
        width: 100%;
        height: 600px; 
        }
    }
    .details-content{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 86px;
        .content-top{
            display: flex;
            width: 1200px;
            height: 300px;
            background-color: #f9f9f9;
            border-radius: 20px;
            .item-left{
                width: 280px;
                height: 280px;
                line-height: 320px;
                text-align: center;
                background: #2e96f9;
                border-radius: 20px;
                margin: 10px 36px 10px 8px;
                img{
                    width: 106px;
                    height: 88px;
                }
            }
            .item-right{
                flex: 1;
                display: flex;
                flex-direction: column;
                // justify-content: space-between;
                span:nth-child(1){
                    width: 100%;
                    height: 35px;
                    margin-top: 27px;
                    font-size: 30px;
                    font-weight: 400;
                    color: #021f6e;
                    line-height: 30px;
                    margin-bottom: 10px;
                }
                span:nth-child(2){
                    font-size: 21px;
                    font-weight: Normal;
                    text-align: left;
                    color: #999999;
                    line-height: 41px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
    .server{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 60px;
        .server-top{
            margin-bottom: 30px;
            h3{
               height: 34px;
               font-size: 30px;
               color: #333333;
               line-height: 36px;
               font-weight: 500;
               margin-bottom: 10px;
             }
          span{
            height: 18px;
            font-size: 21px;
            font-weight: Normal;
            color: #999999;
            line-height: 36px;
          }
        }
        .server-content{
            display: flex;
            flex-wrap: wrap;
            .item-list{
                width: 580px;
                height: 180px;
                line-height: 180px;
                margin: 8px;
                font-size: 21px;
                border: 1px solid rgb(250, 249, 249);
                background-color: #fff;
                border-radius: 20px;
                text-align: center;
                color: #101010;
                box-shadow: -1px 1px 1px 1px rgba(16,16,16,0.21); 
                cursor: pointer;
            }
        }
        
    }
    .process{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 60px;
        .process-top{
           margin-bottom: 30px;
            h3{
               height: 34px;
               font-size: 30px;
               color: #333333;
               line-height: 36px;
               font-weight: 500;
               margin-bottom: 10px;
             }
          span{
            height: 18px;
            font-size: 21px;
            font-weight: Normal;
            color: #999999;
            line-height: 36px;
          }
        }
        .process-content{
          width: 1200px;
          display: flex;
          flex-wrap: wrap;
          .process-item{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 289px;
            height: 100px;
            margin:20px 10px 0 0;
            font-size:30px;
            color: #015CAA;
            text-align: center;
            background: url('../../assets/ServerDetailsImg/unactive.png') no-repeat;
            cursor: pointer;
            span{
              width: 80%;
            }
          }
        }
    }
    .chooseMe{
      width: 1200px;
      margin: 50px auto;
      text-align: left;
      >img{
        width: 1200px;
     
      }
    }
    .basis{
       width: 1200px;
        margin: 0 auto;
        margin-bottom: 60px;
        .basis-top{
           margin-bottom: 30px;
            h3{
               height: 34px;
               font-size: 30px;
               color: #333333;
               line-height: 36px;
               font-weight: 500;
               margin-bottom: 10px;
             }
          span{
            height: 18px;
            font-size: 21px;
            font-weight: Normal;
            color: #999999;
            line-height: 36px;
          }
        }
        .basis-content{
          width: 1200px;
          display: flex;
          flex-direction: column;
          .basis-item{
            height: 53px;
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #ddd;
            margin-bottom: 20px;
            cursor: pointer;
            >span:nth-child(1){
              font-size: 26px;
              color: #666;
            }
            >span:nth-child(2){
              font-size: 24px;
              color: #666;
            }
          }
        }
    }
    .consults{
        width: 1200px;
        margin: 0 auto;
        .consults-top{
            margin-bottom: 30px;
            h3{
               height: 34px;
               font-size: 30px;
               color: #333333;
               line-height: 36px;
               font-weight: 500;
               margin-bottom: 10px;
             }
          span{
            height: 18px;
            font-size: 21px;
            font-weight: Normal;
            color: #999999;
            line-height: 36px;
          }
        } 
    }
}

.apply-form{
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px solid #eee;
  padding:80px 0 50px  300px;
  margin: 30px 0 90px 0;
  border-radius: 15px;
  box-shadow: -1px 1px 1px 1px rgba(100, 100, 100, .5);
  background-color: #f9f9f9;
}
.tipShow{
  margin: 30px 0 30px 50px;
  color: #707070;
  font-size: 14px; 
}
.active{
  background-color: #DAE3F6 !important;
}
.active1{
  font-size: 13px!important;
  text-align: center;
}
.active2{
  background: url('../../assets/ServerDetailsImg/active.png')!important;
  color: #fff!important;
}

</style>