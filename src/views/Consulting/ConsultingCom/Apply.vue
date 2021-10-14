<template>
  <div class="apply">
     <div class="apply-top">
       <h3>咨询留言</h3>
       <p>COMPANY PROFILE</p>
     </div>     
    <div  class="apply-form">
      <el-form ref="form" :model="form" :rules="rules" >
         <div class="form-item">
          <el-form-item label="您的姓名:" class="input" prop="name">
            <el-input v-model="form.name" style="width: 50%;"></el-input>
          </el-form-item>
         <el-form-item label="您的性别:" >
            <el-radio-group v-model="form.gender" style="width:10%">
               <el-radio :label="1">男</el-radio>
               <el-radio :label="0">女</el-radio>
            </el-radio-group>
         </el-form-item>
         </div>
          <el-form-item label="您的手机:" prop="mobile">
            <el-input v-model="form.mobile" style="width: 50%;"></el-input>
          </el-form-item>
         <el-form-item label="您的电话:" style="margin-left:10px">
            <el-input v-model="form.telphone" style="width: 51%;"></el-input>
          </el-form-item>
            <el-form-item label="您的传真:" style="margin-left:10px">
            <el-input v-model="form.fox" style="width: 51%;"></el-input>
          </el-form-item>
            <el-form-item label="您的邮箱:" prop="email">
            <el-input v-model="form.email" style="width: 50.7%;"></el-input>
          </el-form-item>
            <el-form-item label="部门/职位:" style="margin-left:5px">
            <el-input v-model="form.position" style="width: 51%;"></el-input>
          </el-form-item>
            <el-form-item label="工作单位:" prop="work_unit">
            <el-input v-model="form.work_unit" style="width: 51%;"></el-input>
          </el-form-item>
            <el-form-item label="您的地址:" style="margin-left:10px">
            <el-input v-model="form.address" style="width: 52%;"></el-input>
          </el-form-item>
          <el-form-item label="备注:" prop="desc" class="textarea" style="margin-left:35px">
            <el-input type="textarea" v-model="form.description"  style="width: 248%;"></el-input>
          </el-form-item>  
          <div class="tipShow">(提交信息后1个工作日内,会有专人与您联系,也可致电{{phone}}联系客服)</div>
  <el-form-item>
    <el-button  @click="onSubmit">立即提交</el-button>
  </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name:'Apply',
  data(){
    return {
      form:{
          name:'',
          gender:'',
          mobile:'',
          telphone:'',
          fox:'',
          email:'',
          position:'',
          work_unit:'',
          address:'',
          description:''
      },
      rules:{
         name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         mobile: [
            { required: true, message: '请输入您的手机号码', trigger: 'blur' },
            { min: 11, max: 11, message: '手机号码位数不正确', trigger: 'blur' }
          ],
         email: [
            { required: true, message: '请输入您的邮箱', trigger: 'blur' },
            // { min: 11, max: 11, message: '手机号码位数不正确', trigger: 'blur' }
          ],
         work_unit:[
            { required: true, message: '请输入您的工作单位', trigger: 'blur' },
          ],
      },
      radio: '',
      active:1,
      phone:''
    }
  },
  created(){
    this.$bus.$emit('Consulting',this.active)
    this.$axios({
      url:"Index/back_mobile",
    }).then(res => {
      this.phone = res.data
    })
  },
  methods:{
    onSubmit(){
      this.$axios({
        url:'/Index/consult_message',
        method:'POST',
        data:{
          ...this.form,
          type:1
        }
      }).then(res => {
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
    }
  }
}
</script>
<style lang='less'>
.form-item{
  width: 1200px;
  display: flex;
  .input{
    width: 70%;
    .el-form-item__content{
      width: 130%!important;
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
  // .item-textarea{
  //   width: 215%;
  //   margin-left: 28px;
  // }
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
.apply-top{
  margin-top: 20px;
  h3{
    font-size: 21px;
    font-weight: 400;
  }
  p{
    color: #b1b0b0;
    margin-top: 10px;
  }
}
.apply-form{
  width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px solid #eee;
  padding:80px 0 150px  300px;
  margin-top: 30px;
  border-radius: 15px;
  box-shadow: -1px 1px 1px 1px rgba(100, 100, 100, .5);
}
.tipShow{
  margin: 30px 0 30px 50px;
  color: #707070;
  font-size: 14px; 
}
</style>