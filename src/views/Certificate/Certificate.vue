<template>
  <div class="certificate">
    <div class="content">
        <div class="title">证书查询</div>
        <el-input
          placeholder="请输入姓名"
          v-model="userName">
        </el-input>
        <el-input
          placeholder="请输入身份证号码或证书编号"
          v-model="CertificateNum">
        </el-input>
        <div class="submit" @click='goCertificateQuery'>
          提交查询
        </div>
    </div>
    <div class="footer-title">@中培国实(北京)检验检测技术研究所</div>
  </div>
</template>

<script>
export default {
   name:"Certificate",
  data(){
    return {
      CertificateNum:'',
      userName:'',
    }
  },
  methods:{
    goCertificateQuery(){
      this.$axios({
       url:'/index/search_cert',
       method:'POST',
       data:{
         name:this.userName,
         cardnum:this.CertificateNum
       }
      }).then(res =>{
        console.log(res);
        if(res.code == 0){  
           this.$message({
            message:res.msg,
            type:'error'
           });
        }else if(res.data.type ==1) {
            localStorage.setItem('data',JSON.stringify(res.data))
            this.$router.push('/certificatequery')  
        }else {
          localStorage.setItem('data',JSON.stringify(res.data))
          this.$router.push('/certificatequeryMore')  
        }
        
      }) 
    }
  }

}
</script>

<style lang='less' scoped>

.certificate{
  position: relative;
  height: 100vh;
  width: 100%;
  background:url('../../assets/CertificateImage/bg1.png') no-repeat;
  background-size: 100% 100%;
 .content{
   position: absolute;
   width: 1000px;
   height: 600px;
   border-radius: 20px;
   background-color: #fff;
   opacity: .6;
   box-shadow: -1px 0 1px 1px rgba(16,16,16,.2);
   left: 50%;
   top: 14%;
   transform: translate(-50%);
   text-align: center;
   .title{
     font-size: 30px;
     font-weight: bold;
     padding-top: 50px;
     color: #000;
     margin-bottom: 30px;
   }
   .submit{
   position: absolute;
   width: 60%;
   height: 45px;
   line-height: 45px;
   background-color: blue;
   color: #fff;
   left: 50%;
   bottom: 35%;
   transform: translate(-50%);
   text-align: center;
 }
 }
 .footer-title{
   position: absolute;
   bottom: 130px;
   left:50%;
   transform: translate(-50%);
   color: #FFF;
 }
}
.el-input{
  width: 60%;
  margin: 30px 0;
  text-align: center !important;
}
/deep/.el-input--suffix .el-input__inner{
  width: 60%!important;
  outline: none!important;
  background-color: #fff!important;
  margin: 30px 0 !important;
  text-align: center !important;
  border: 1px solid #b8b7b7;
  color: #000;
}
</style>