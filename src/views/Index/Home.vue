<template>
  <div class="home">
    <Header :banner ='swipers'></Header>
   <div class="swiper">
      <swiper :swiper='swipers' ></swiper>
   </div>
   <div class="swiper-bottom">
     <div class="swiper-bottom-left">
         <el-carousel height="400px" indicator-position="none"  autoplay loop >
           <el-carousel-item v-for="item in swiperBottomList" :key="item" >
             <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
     </div> 
      <div class="swiper-bottom-right">
          <div >
            <div v-for="(item,index) in swiperBottomItem" :key="index" class="1" :class="activeIndex == index ?'active1':'' " @click='activeItemChange(index)'>
                  <div>{{item.name}}</div>
            </div>
          </div> 
          <div>
            <div class="right-item" v-for="(item,index) in swiperBottomContent" :key="index">
                  <div @click='goNoticeDet(item.id)'>
                     <span :title="item.title">{{item.title}}</span>
                     <span>发布时间:{{item.createtime}}</span>  
                  </div>              
            </div>
          </div>
          <div class="right-more" @click="goDET">更多</div>
     </div>
   </div>
   <!-- 环境监测 -->
   <div class="environment">
      <div class="environment-top">
         <div>环境监测机构专业技术人员能力提升培训</div>
         <img src="../../assets/HomeImage/go.png" alt=""  @click="goNotice">
      </div>
      <div class="environment-content">
          <div class="content-item"  v-for="(item,index) in environmentList" :key="index">
              <div>{{item.title}}</div>
              <div>
                <div><img :src="item.image" alt=""></div>   
                <div :title="item.description">{{item.description}}</div>
                <div @click='goPay(item.id)'>立即购买</div>
              </div>
          </div>
      </div>
   </div>
   <!-- 咨询服务 -->
   <div class="server">
      <div class="server-top">咨询服务</div>
      <div class="server-content" >
        <div class="content-item" v-for="(item,index) in serverList" :key="index" @click='goServerdetails(item.id)'>
          <div>
             <img :src="item.image" alt="">
          </div>
          <div>{{item.name}}</div>
        </div>
      </div>
   </div>
   <!-- 专家团队 -->
   <div class="expert-team">
      <div class="team-top">专家团队</div>
      <div class="team-content">
          <div class="content-item" v-for="(item,index) in expertTeamList" :key="index"  @mouseenter="showPop(index)" @mouseleave="leavePop(index)">
              <div> 
                <img :src="item.image" alt="">
              </div>
              <div>
                <div>{{item.name}}</div>
                <div>
                  <span>{{item.title}}</span>
                  <span>{{item.education}}</span>
                </div>
                 <div class="popShow" v-if="item.isShow">
                        <span>{{item.description}}</span>
                    </div>
              </div>
          </div>
      </div>
   </div>
   <!-- 知识问答模块 -->
   <div class="knowledge">
      <div class="knowledge-left" >
          <div class="left-top">
            <div id="zhishi">知识问答</div>
            <div id="morf" @click="morf">
            	MORE 
            <span>+</span>
            </div>
          </div>
          <vue-seamless-scroll :data='knowledgeList' :class-option="classOption" class="table-content">
            <div class="top-item" v-for="(item,index) in knowledgeList" :key="index" @click='goNoticeDetetails(item.id)'> 
             <div>   
                <span>问</span>
                <span :title="item.title">{{item.title}}</span>
             </div>
             <div>
               <span>答</span>
               <span v-html="item.content" class="wenda-da" ref="kk" :title="item.content" > </span>
             </div>
          </div>
         </vue-seamless-scroll>
          <!-- <div class="top-item" v-for="(item,index) in knowledgeList.slice(0,3)" :key="index" @click='goNoticeDetetails(item.id)'> 
             <div>   
                <span>问</span>
                <span>{{item.title}}</span>
             </div>
             <div>
               <span>答</span>
               <span v-html="item.content" class="wenda-da" ref="kk" > </span>
             </div>
          </div> -->
      </div>
      <div class="knowledge-right">
         <div class="right-form" >
            <div class="right-top">培训报名</div>
            <div >
            <el-form ref="forms" :model="form" label-width="80px" >
             <div style="margin-top:15px;" class="inner">
                <el-form-item label="姓名">
                  <el-input v-model="form.item[0].name" style="width: 65%;"></el-input>
              </el-form-item>
              <el-form-item label="培训类别">
                <el-select v-model="form.train_type" placeholder="请选择"  style="width: 90%;">
                   <el-option v-for="(item,index) in trainTypeList" :key="index" :label="item.name" :value="item.name"></el-option>
               </el-select>
              </el-form-item>
             </div>
             <div style="margin-top:6px;" class="inner">
               <el-form-item label="性别">
                <el-select v-model="form.item[0].sex" placeholder="请选择"  style="width: 65%;">
                   <el-option label="男" value="1"></el-option>
                   <el-option label="女" value="2"></el-option>
               </el-select>
              </el-form-item>
              <el-form-item label="培训项目" style="margin-right:15px;">
                <el-select v-model="form.train_project" placeholder="请选择"  style="width: 98%;">
                   <el-option v-for="(item,index) in trainProjectList" :key="index" :label="item.name" :value="item.name"></el-option>  
               </el-select>
              </el-form-item>
             </div>
             <div class="inner">
                <el-form-item label="身份证号">
                  <el-input v-model="form.item[0].card" style="width: 97%;"></el-input>
              </el-form-item>
                <el-form-item label="地址邮箱" style="margin-right:15px;">
                  <el-input v-model="form.item[0].email" style="width: 98%;"></el-input>
              </el-form-item>            
             </div>
             <div class="inner">
                <el-form-item label="手机号码">
                  <el-input v-model="form.item[0].mobile" style="width: 97%;"></el-input>
              </el-form-item>
               <el-form-item label="单位名称" style="margin-right:15px;">
                  <el-input v-model="form.item[0].company" style="width: 98%;"></el-input>
              </el-form-item>
             </div>
             <div class="inner">
                <el-form-item label="所属行业">
                  <el-input v-model="form.trade" style="width: 97%;"></el-input>
               </el-form-item>
               <el-form-item label="是否住宿">
                <el-select v-model="form.is_live" placeholder="请选择"  style="width: 90%;">
                   <el-option label="是" value="1"></el-option>
                   <el-option label="否" value="2"></el-option>
               </el-select>
              </el-form-item>      
             </div>
              <el-form-item label="上传照片" style="margin-right:15px;">
                  <el-upload
                    class="upload-demo"
                    action="http://zpadmin.dd371.com/api/Common/upload"
                    multiple
                    :limit="1"
                    :file-list="fileList"
                    :on-success='fileSuccess'
                    :on-remove='handleRemove'>
                      <el-input type="text" disabled v-model="form.image" placeholder="请上传小二寸免冠照片"  style="width: 57%;margin-left:126px" ></el-input>
                  </el-upload>
              </el-form-item>
           </el-form>
          </div>
         </div>
         <div class="right-bottom">
            <div class="bottom-item" @click='goEnlist'>
              <img src="../../assets/HomeImage/people.png" alt="">
              <span> 增加人数</span>
            </div>
             <div class="bottom-item" @click='submit'>
              <img src="../../assets/HomeImage/Submit.png" alt="">
              <span>提交信息</span>
            </div>
         </div>
      </div>
   </div>
    <div class="link">
        <div class="link-top">友情链接</div>
        <div class="link-content">
          <div v-for="item in link" :key="item.id">
             <el-select v-model="value" :placeholder="item.title">
              <a v-for="(itemm,index) in item.list" :key='index' :href="'http://'+itemm.url"  >
                <el-option
                :label="itemm.name"
                :value="index">
              </el-option>
              </a>
           </el-select>
          </div>
        </div>
    </div>
  <div class="footer">
    <Footer></Footer>
  </div>
  <!-- 支付提示弹窗 -->
  <div class="payPop" v-if="payShow">
    <el-dialog
      :visible.sync="payShow"
      width="512px"
      :show-close="showClo">
      <div class="payPop-top">
          <div>
            <img src="../../assets/HomeImage/pay1.png" alt="">
            <img src="../../assets/HomeImage/pay2.png" alt="">
          </div>
          <div v-for="(item,index) in environmentList" :key="index" class="code">
             <img :src="item.qrcode"  v-if="itemId==item.id" class="codeImg">
          </div>
          <div class="footer" v-for="(item,index) in environmentList" :key="index">
            <span v-if="itemId==item.id">{{item.business}}</span>
            <span v-if="itemId==item.id">商户编号：{{item.business_num}}</span>
          </div>
      </div>
      <div class="payPop-footer">请使用支付宝或者微信支付</div>
    </el-dialog>
  </div>
</div>
</template>

<script>
import Header from '../../components/Header.vue'
import Swiper from '../../components/Swiper.vue'
import Footer from '../../components/Footer.vue'
import TopShow from '../../components/TopShow.vue'

export default {
  name: 'Home',
  data(){
    return {
        swipers:[],
        aboutZp:"",
        consultList:[],
        consultNum:'',
        consultTit:'',
        newsList:[],
        specialCate:[],
        swiperBottomItem:[],
        swiperBottomList:[],
        swiperBottomContent:[],
        environmentList:[],
        serverList:[],
        expertTeamList:[],
        itemId:0,
        knowledgeList:[],
        trainTypeList:[],
        trainProjectList:[],
        activeIndex:1,
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
        fileList:[],
        value: '',
        payShow:false,
        showClo:true,
        link:[],
    }
  },
 computed: {
    classOption () {
      return {
         step: 0.5, // 数值越大速度滚动越快
         limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
         hoverStop: true, // 是否开启鼠标悬停stop
         direction: 1, // 0向下 1向上 2向左 3向右
         openWatch: true, // 开启数据实时监控刷新dom
         singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
         singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
         waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  created(){
    //获取首页轮播图
    this.$axios({
      url:'/index',
    }).then(res =>{
      this.swipers = res.data.banner
      this.swiperBottomList = res.data.centerpic
      this.aboutZp = res.data.about_zp
      this.consultList = res.data.consult_server
      this.specialCate =res.data.special_cate
      this.newsList =res.data.news_center
      this.link = res.data.footer.url
    })
    //获取中部右侧数据
    this.$axios({
      url:'/Index/CenterRightModular'
    }).then(res =>{
      this.swiperBottomItem = res.data
      for(let k in this.swiperBottomItem){
        if(this.swiperBottomItem[k].list.length>4){
          this.swiperBottomItem[k].list.size = true
        }
      }
      this.activeItemChange(this.activeIndex)
    })  
     //获取会员单位数据
   this.$axios({
     url:'/Index/MemberList',
   }).then(res =>{
     console.log(res,'data')
     this.environmentList =res.data
   })
   //获取咨询服务数据
   this.$axios({
     url:'/Index/IndexConsult'
   }).then(res =>{
     this.serverList =res.data
   })
   //获取专家团队数据
   this.$axios({
     url:'/Index/ExpertTeam'
   }).then(res =>{
     var i = 0
     this.expertTeamList = res.data
     this.expertTeamList.forEach(v => {
        v.isShow =false
        return
     })
   })
   //获取知识问答模块
   this.$axios({
     url:'/Index/IndexKnowledge'
   }).then(res=>{
     this.knowledgeList = res.data	
   })
  //获取下拉数据
  this.$axios({
    url:'index/TrainType'
  }).then(res=>{
    this.trainTypeList = res.data.train_type
    this.trainProjectList = res.data.train_project
  })
  },

  methods:{
    //立即购买显示弹窗
    goPay(id){
      this.payShow = true
      this.itemId = id
    },
    //获取中部右侧列表数据，并对数据进行处理
    activeItemChange(index){
        this.activeIndex =index
        if(this.swiperBottomItem[index].list.size){
          this.swiperBottomContent = this.swiperBottomItem[index].list.slice(0,4)
        }else{
          this.swiperBottomContent = this.swiperBottomItem[index].list
        }
    },
    //显示专家简介
    showPop(i){
        this.expertTeamList[i].isShow = true
        //当函数不奏效时，让函数立即强制执行
        this.$forceUpdate()
    },
    //隐藏专家简介
    leavePop(i){
        this.expertTeamList[i].isShow = false
        this.$forceUpdate()
    },
    //获取上传图片的地址
    fileSuccess(file,res){
      this.form.image = file.data.url
    },
    handleRemove() {
      this.form.image = ''
      this.$forceUpdate()
    },
   // morf 跳转到问答模块
   morf(){ 
	   this.$router.push("/knowledge/knowledgeitem")   
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
    //中部右侧更多跳转
    goDET(){
      if(this.activeIndex ==1){
        this.$router.push('/trainserver/notice')
      }else if(this.activeIndex ==2){
        this.$router.push('/newscenter/regulations')
      }else if(this.activeIndex ==3){
        this.$router.push('/newscenter/letters')
      }else if(this.activeIndex ==4){
        this.$router.push('/newscenter/newsitem')
      }else if(this.activeIndex ==5){
        this.$router.push('/trainserver/download')
      }
    },
    //跳转详情
    goDetails(id){
      this.$router.push(`/serverdetails/${id}`)
    },
    goEquipment(id,name){
      this.$router.push(`/equipment/${id}/${name}`)
    },
    goNews(){
       this.$router.push('/dynamic/news')
    },
    goNewsDetails(id){
      this.$router.push(`/newsdetails/5?list=5&id=${id}`)
    },
    goAboutZP(){
      this.$router.push('/introduction')
    },
    goServerdetails(id){
      this.$router.push(`/serverdetails/${id}`)
    },
    goNotice(){
      this.$router.push('/trainserver/notice')
    },
    goEnlist(){
      this.$router.push('/trainserver/enlist')
    },
    //中部跳转
    goNoticeDet(id){
      if(this.activeIndex == 1){
        this.$router.push(`/newsdetails/1?list=1&id=${id}`)
      }else if(this.activeIndex == 2){
        this.$router.push(`/newsdetails/3?list=3&id=${id}`)
      }else if(this.activeIndex == 3){
         this.$router.push(`/newsdetails/4?list=4&id=${id}`)
      }else if(this.activeIndex == 4){
         this.$router.push(`/newsdetails/5?list=5&id=${id}`)
      }else if(this.activeIndex == 5){
        this.$router.push(`/newsdetails/2?list=2&id=${id}`)
      }
    },
    //跳转问答详情
    goNoticeDetetails(id){
      this.$router.push(`/newsdetails/2?list=8&id=${id}`)
    }
  },
  //注册组件
  components: {
    Header,
    Swiper,
    Footer,
    TopShow
  }
}
</script>
<style  >

</style>
<style lang='less' scoped>
	
@import url('../../assets/style/style.less');
 img[data-v-07a952a8]{
    height: 800px!important;
    background-position: center center;
    background-size: cover;
 }
   /deep/.menu-item{
     border-bottom: none!important;
     display: flex!important;
    }

    /deep/.el-menu-item .is-active{
    background-color:#eb8a2f!important;
    color: #fff!important;
    }

     /deep/.el-menu.el-menu--horizontal{
    border-bottom: none!important;
    }
    /deep/.el-menu--popup-bottom-start{
      margin-left: -25px!important;
    }
    /deep/.el-upload-list__item .el-icon-close{
   margin-right: 0px!important;
   }
   .inner{
     display:flex;
     margin-bottom:-20px;
   }
   .wenda-da {
	   height: 5rem;
   }
   #zhishi{
	   width: 100px;
	   height: 35px;
	   line-height: 35px;
	   background: #005dab;
	   border-radius: 0px 17px 17px 0px;
	   text-align:center;
   }
   #morf{
	  width: 100px;
	  height: 16px;
	  font-size: 18px;
	  font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
	  font-weight: 400;
	  text-align: center;
	  color: #666666;
	  line-height: 16px;
	  letter-spacing: 0px; 
    cursor: pointer;
   }
    #morf span{
	   position: relative;
		 font-size: 20px;
		 top:-15px;
		 right:-0px;
	}
  
</style>
