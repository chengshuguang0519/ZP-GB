<template>
  <div class="enlist">
      <!-- <div class="enlist-header">
        <span>培训报名</span>
        <span>COMPANY PROFILE</span>
      </div> -->
      <div class="enlist-content">
           <div class="knowledge-right" >
          <div class="right-form" >
            <div class="right-top">培训报名</div>
            <div>
            <el-form ref="forms" :model="form" label-width="100px" style="margin-left:120px">
                <el-form-item label="姓名">
                  <el-input v-model="form.item[0].name" class="inner"></el-input>
              </el-form-item>
                 <el-form-item label="性别" >
                <el-select v-model="form.item[0].sex" placeholder="请选择" class="inner">
                   <el-option label="男" value="1"></el-option>
                   <el-option label="女" value="2"></el-option>
               </el-select>
              </el-form-item>
               <el-form-item label="身份证号">
                  <el-input v-model="form.item[0].card" class="inner"></el-input>
              </el-form-item>
               <el-form-item label="手机号码">
                  <el-input v-model="form.item[0].mobile" class="inner"></el-input>
              </el-form-item>
              <el-form-item label="地址邮箱">
                  <el-input v-model="form.item[0].email" class="inner"></el-input>
              </el-form-item>
              <el-form-item label="单位名称" >
                  <el-input v-model="form.item[0].company" class="inner"></el-input>
              </el-form-item>
              <el-form-item label="所属行业" >
                  <el-input v-model="form.trade" class="inner"></el-input>
              </el-form-item>
              <el-form-item label="培训类别">
                <el-select v-model="form.train_type" placeholder="请选择"  class="inner">
                   <el-option v-for="(item,index) in trainTypeList" :key="index" :label="item.name" :value="item.name"></el-option>
               </el-select>
              </el-form-item>
              <el-form-item label="培训项目">
                <el-select v-model="form.train_project" placeholder="请选择"  class="inner">
                   <el-option v-for="(item,index) in trainProjectList" :key="index" :label="item.name" :value="item.name"></el-option>  
               </el-select>
              </el-form-item>
              <el-form-item label="是否住宿">
                <el-select v-model="form.is_live" placeholder="请选择" class="inner">
                   <el-option label="是" value="1"></el-option>
                   <el-option label="否" value="2"></el-option>
               </el-select>
              </el-form-item>
              <el-form-item label="上传照片">
                  <el-upload
                    class="upload-demo"
                    action="http://zpadmin.dd371.com/api/Common/upload"
                    multiple
                    :limit="1"
                    :file-list="fileList"
                    :on-success='fileSuccess'
                    :on-remove='handleRemove'>
                      <el-input type="text" disabled v-model="form.image" placeholder="请上传小二寸免冠照片"  style="width: 750px;margin-left:-22px" ></el-input>
                  </el-upload>
              </el-form-item>
           </el-form>
          </div>
          <div class="tab"  v-if="addShow">
              <div>
                  <div>添加人数</div>
                  <div>
               <el-table class="tableBox" border style="width:750px" :data="form.item.slice(1)"  highlight-current-row >
                 <el-table-column label="姓名" width="110">
                    <template slot-scope="scope">
                       <el-input size="small" class="ipt1"  align="center" v-model="scope.row.name" ></el-input> <span>{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="性别" width="107">
                     <template slot-scope="scope" >
                        <el-select v-model="scope.row.sex" class="ipt1" placeholder="请选择" align="center" >
                             <el-option label="男" value="1"></el-option>
                             <el-option label="女" value="2"></el-option>
                        </el-select>
                       <!-- <el-input size="small" class="ipt1"  align="center"  v-model="scope.row.address"  ></el-input> <span>{{scope.row.address}}</span> -->
                     </template>
                </el-table-column>
                <el-table-column prop="address" label="身份证号" >
                     <template slot-scope="scope">
                       <el-input size="small" class="ipt1"   v-model="scope.row.card" ></el-input> <span>{{scope.row.card}}</span>
                     </template>
                </el-table-column>
                 <el-table-column prop="address" label="手机号码" width="130" >
                     <template slot-scope="scope">
                       <el-input size="small" class="ipt1"   v-model="scope.row.mobile"  ></el-input> <span>{{scope.row.mobile}}</span>
                     </template>
                </el-table-column>
                 <el-table-column prop="address" label="地址邮箱" width="100" >
                     <template slot-scope="scope">
                       <el-input size="small" class="ipt1"  align="center" v-model="scope.row.email"  ></el-input> <span>{{scope.row.email}}</span>
                     </template>
                </el-table-column>
                <el-table-column prop="address" label="单位名称" width="150">
                     <template slot-scope="scope">
                       <el-input size="small" class="ipt1"  align="center" v-model="scope.row.industry" ></el-input><span>{{scope.row.industry}}</span>
                     </template>
                </el-table-column>
              </el-table>
            </div>
              </div>
              <div @click='showAdd'>
                  <img src="../../../assets/TrainServerComImg/additem.png" alt=""><span>添加人数</span> 
              </div>
           </div>  
           <div class="right-bottom">
            <div class="bottom-item-first bottom-item" @click='showAdd' v-if="!addShow">
              <img src="../../../assets/TrainServerComImg/add.png" alt="">
              <span> 添加人数</span>
            </div>
             <div class="bottom-item-second bottom-item" @click='deleteAdd' v-else>
              <span> 取消</span>
            </div>
             <div class="bottom-item" @click='submit'>
              <img src="../../../assets/HomeImage/Submit.png" alt="">
              <span>提交信息</span>
            </div>
         </div>
         </div>  
       </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Enlist',
    data(){
      return {
        active:2,
        trainTypeList:[],
        trainProjectList:[],
        fileList:[],
        value: '',
        form:{
          item: [
            {
            name: '',
            sex:'',
            card:'',
            mobile:'',
            email:'',
            company:'',
            
          }
          ],
            trade:'',
            train_type:'',
            train_project:'',        
            is_live:'',
            image:''
        },
        tableData: [],
        addShow: false,
      }  
    },
    methods:{
    //获取上传图片的地址
    fileSuccess(file,res){
      this.form.image = file.data.url
    },
    inputFocus(){
       this.$nextTick(() => {
         this.$refs.input.focus()
      })
    },
    handleRemove() {
      this.form.image = ''
      this.$forceUpdate()
    },
   
    deleteItem(){
      this.tableData.pop()
    },
    showAdd(){
      this.addShow =true
      this.form.item.push({
           name: '',
           sex:'',
           card:'',
           mobile:'',
           email:'',
           company:'',  
         })
    },
    deleteAdd(){
      this.addShow =true
      this.form.item.pop()
      if(this.form.item.slice(1).length <1){
        this.addShow =false
      }
    },
    //培训报名提交
    submit(){
        this.$axios({
           url:'/Index/Train',
           method:'POST',
           data:{
             ...this.form
           }
        }).then(res =>{
          if(res.code ==0 ){
            this.$message({
             message:res.msg,
             type:'error'
           });
          }else{
            this.form = {
            item: [
             {
               name: '',
               sex:'',
               card:'',
               mobile:'',
               email:'',
               company:'',
           }
          ],
              trade:'',
              train_type:'',
              train_project:'',        
              is_live:'',
              image:''
            }
            this.fileList = []
            this.form.image =''
            this.addShow = false
            this.$message({
             message:res.msg,
             type:'success'
           });   
          }
        })     
    },
    },
    created(){
       this.$bus.$emit('trainserver',this.active)  
       this.tableData = this.form.item.slice(1)
        //获取下拉数据
       this.$axios({
         url:'index/TrainType'
       }).then(res=>{
         this.trainTypeList = res.data.train_type
         this.trainProjectList = res.data.train_project
       })
    }
    
    
}
</script>

<style lang='less' scoped>
.enlist{
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  overflow: hidden; 
  .enlist-header{
    display: flex;
    flex-direction: column;
     span{
      color: #424242;
      margin-bottom: 5px ;
    }
    span:nth-child(1){
      color: #000;
      font-size: 24px;
    }
  }
  .enlist-content{
    width: 100%;
    text-align: center;
  }
}
 .knowledge-right{
    margin-right: 40px;
    .right-form{
    width: 98%;
    background-color: #f8f8f8;
    border: 2px solid #ddd;
    margin: 40px auto;
    border-radius: 10px;
    box-sizing: border-box;
    .right-top{
      font-size: 28px;
      font-weight: 700;
      margin: 28px 0 54px 42px;
      color: #005DAB;
      text-align: left;
    }
  }
   .right-bottom{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 92px;
      .bottom-item{
        font-size: 18px;
        width: 122px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #015CAA;
        border-radius: 10px;
        margin: 20px 30px;
        cursor: pointer;
        img{
          vertical-align:middle;
          margin-bottom: 4px;
          margin-right: 6px;
        }
        span{
          color: #fff;
          margin-top:5px ;
        }
      }
      .bottom-item-first{
        background-color: #F06911;
      }
      .bottom-item-second{
        background-color: #999999;
      }
    }
 }
 .tab{
   margin:60px 0 50px 130px;
   >div:nth-child(1){
      display: flex;
       >div:nth-child(1){
         font-size: 20px;
         color: #333333;
       }
      >div:nth-child(2){
        margin-left: 30px;
     }
   }
  >div:nth-child(2){
    margin-top: 20px;
    margin-right: 100px;
    img{
      vertical-align: middle;
      margin: 0 10px 2px 0;
    }
    span{
      font-size: 20px;
      color: #F06911;
    }
  }
 }
 .inner{
   width: 750px;
   margin-right:120px
 }
  /deep/.el-input__inner{
    height: 40px!important;
  }
  /deep/.el-upload{
    width: 750px!important;
    margin-left: -100px;
  }
/deep/.el-select .el-input.is-focus .el-input__inner{
  border-color: #015CAA!important;
}
/deep/ .el-input__suffix{
  margin-top: 6px!important;
}
/deep/.el-input__icon{
  line-height: 45px;
}
/deep/.el-button--primary{
  background-color: #015CAA!important;
  border: none!important;
}
/deep/ .tableBox{
  th{
    padding: 0!important;
    height: 45px!important;
    line-height: 45px!important;
  }
  td{
    padding: 0!important;
    height: 45px!important;
    line-height: 45px!important;
  }
  
}
/deep/.el-table .cell{
    height: 45px!important;
    line-height: 45px!important;
    background-color: #fff;
    text-align: center;
    &:hover{
      background-color: #fff;;
    }
  }
 /deep/.ipt1 .el-input__inner{
  border: none;
  text-align: center;
}
/deep/.el-form-item__label{
  font-size: 20px;
  color: #333333;
}
/deep/.el-upload-list__item .el-icon-upload-success{
  margin-right: 140px!important;
}
/deep/.el-upload-list__item-name{
  margin-right: 769px!important;
}
/deep/.el-upload-list__item .el-icon-close{
  margin-right: 140px!important;
}
</style>