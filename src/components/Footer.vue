<template>
    <div class="footer">
        <div class="footer-top">
            <img src="../assets/FooterImage/home.png" alt="" @click='goIndex'>
            <ul>
                <li @click="goIntroduction">关于我们</li>
                <li @click='goConsulting'>咨询服务</li>
                <li @click='goServer'>专项服务</li>
                <li @click="goDynamic">本院动态</li>
            </ul>
           <div @click="toTop">
                <img src="../assets/FooterImage/left.png" alt="">
                <span>TOP</span>
           </div>
        </div>
        <div class="footer-item">
            <img :src="footeList.left_image" alt="">            
            <div>
               <span>地址：{{footeList.address}}</span>
               <div class="phone">
                   <span>电话 :</span>
                   <span>{{footeList.mobile}}</span>
               </div>
                <span>{{footeList.copyright}}</span>
                <span>{{footeList.beian}}</span>
            </div>
            <div>
                <img :src="footeList.qrcode" alt="">
                <span>扫一扫关注我们</span>
            </div>         
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return {
            url:'',
            gotop: false,
            footeList:{}

        }
    },
    created(){
       this.$axios({
         url:'/index',
       }).then(res =>{
           this.footeList =res.data.footer
           this.url =res.data.footer.url
           if(this.footeList.address== ""){
               this.footeList.address ='北京市丰台区长辛店杨公庄1号2-4幢4层403号111'
           }
           if(this.footeList.mobile == ''){
               this.footeList.mobile ='010-83866312'
           }
       })
    },
     mounted() {
       window.addEventListener("scroll", this.handleScroll, true);
    },
    methods:{
     goIndex(){
       this.$router.push('/index')
     },
     goIntroduction(){
         this.$router.push('/about')
     },
     goConsulting(){
        this.$router.push('/consulting/apply')
    },
     goServer(){
         this.$router.push('/server/list')
    },
     goDynamic(){
         this.$router.push('/newscenter/newsitem')
    },
     handleScroll() {
      let scrolltop =document.documentElement.scrolltop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
      },
     toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
 }
}
</script>

<style lang='less' scoped>
a{
    text-decoration: none;
    color: #333;
}
.footer{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #545c64;
    .footer-top{
        width: 1200px;
        height: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        >img:nth-child(1){
            width: 30px;
            height: 30px;
            margin-top: 15px;
            margin-left: 90px!important;
            cursor: pointer;
        }
        ul{
            flex: 1;
            display: flex;

            padding: 0 180px 0 200px;
            // margin-left: 40px;
            color: #fff;
            justify-content: space-between;
            li{
                cursor: pointer;
                height: 30px;
                line-height: 30px;
                border-right: 1px solid #fff;
                margin-top: 20px;
                padding-right: 36px;
            }
            li:last-child{
              border-right: none;
           }
        }
        img:nth-child(1){
            margin-left: 70px;
            
        }
        div:nth-child(3){
            display: flex;
            flex-direction: column;
            text-align: center;
            cursor: pointer;
            margin-top: 10px;
            img{
                width: 20px;
                transform: rotate(90deg);
                margin-right: 120px;
            }
            span{
                font-size: 10px;
                margin: -25px 48px 30px 0;
                color: #eee;
            }
        }
    }
    .footer-item{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        img{
            width: 200px;
            height: 200px;
            margin-top: 50px;
        }
        div:nth-child(2){
            display: flex;   
            flex-direction: column;
            justify-content: space-around;
            box-sizing: border-box;
            padding: 10px 0;
            color: #333;
            margin: 20px 0;
            span,div{
                margin: -22px 2px ;
            }
            span:nth-child(1){
                white-space: nowrap;
            }
            .phone{
                display: flex;
                width: 200px;
                flex-direction: row;
                margin-left: -6px;
                span:nth-child(2){
                    color: rgb(43, 43, 245);
                    margin-right: 20px;
                }
            }
        }
        div:nth-child(3){
            display: flex;
            flex-direction: column;
            margin-left: 280px;
            margin-right: 26px;
            span{
                margin-left: 50px;
                margin-top: -20px;
                color: #696969;
            }
        }
    }
}
</style>