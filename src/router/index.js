import Vue from 'vue'
import VueRouter from 'vue-router'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 引入首页文件
const Home = () =>
    import ('../views/Home.vue')
    // 引入关于文件
const Introduction = () =>
    import ('../views/About/Introduction.vue')

//证书查询
const Certificate = () =>
    import ('../views/Certificate/Certificate.vue')
    //证书查询详情
const CertificateQuery = () =>
    import ('../views/Certificate/CertificateCom/CertificateQuery.vue')

// 引入咨询服务
const Consulting = () =>
    import ('../views/Consulting/Consulting.vue')
const List = () =>
    import ('../views/Consulting/ConsultingCom/List.vue')
const Reflect = () =>
    import ('../views/Consulting/ConsultingCom/Reflect.vue')
const Apply = () =>
    import ('../views/Consulting/ConsultingCom/Apply.vue')

// 引入专项服务
const Server = () =>
    import ('../views/Server/Server.vue')
const ServerList = () =>
    import ('../views/Server/ServerCom/List.vue')
const ServerReflect = () =>
    import ('../views/Server/ServerCom/Reflect.vue')
const ServerApply = () =>
    import ('../views/Server/ServerCom/Apply.vue')

// 引入行业动态
const Dynamic = () =>
    import ('../views/Dynamic/Dynamic.vue')
const Item = () =>
    import ('../views/Dynamic/DynamicCom/Item.vue')
const News = () =>
    import ('../views/Dynamic/DynamicCom/News.vue')

// 首页咨询服务详情
const ServerDetails = () =>
    import ('../views/ServerDetails/ServerDetails.vue')

// 专项服务二级页面
const EquipmentDetails = () =>
    import ('../views/EquipmentDetails/EquipmentDetails.vue')

// 专项服务仪器设备二级详情
const InstrumentDetails = () =>
    import ('../views/InstrumentDetails/InstrumentDetails.vue')
const InstrumentDetail = () =>
    import ('../views/InstrumentDetails/InstrumentDetail.vue')

//专项服务仪器设备留言咨询页面
const ApplyItem = () =>
    import ('../views/InstrumentDetails/InstrumentCom/ApplyItem.vue')

// 新闻中心详情
const NewsDetails = () =>
    import ('../views/NewsDetails/NewsDetails.vue')

// 案例体现详情页
const CaseDetails = () =>
    import ('../views/CaseDetails.vue/CaseDetails.vue')



//改版部分

//培训服务
const TrainServer = () =>
    import ('../views/TrainServer/TrainServer.vue')
    //通知公告
const Notice = () =>
    import ('../views/TrainServer/TrainServerCom/Notice.vue')
    //下载中心
const Download = () =>
    import ('../views/TrainServer/TrainServerCom/Download.vue')
    //培训报名
const Enlist = () =>
    import ('../views/TrainServer/TrainServerCom/Enlist.vue')

//新闻中心
const NewsCenter = () =>
    import ('../views/NewsCenter/NewsCenter.vue')
const Regulations = () =>
    import ('../views/NewsCenter/NewsCenterCom/Regulations.vue')
const Letters = () =>
    import ('../views/NewsCenter/NewsCenterCom/Letters.vue')
const NewsItem = () =>
    import ('../views/NewsCenter/NewsCenterCom/Item.vue')

//专家团队
const ExpertTeam = () =>
    import ('../views/ExpertTeam/ExpertTeam.vue')


//知识问答
const Knowledge = () =>
    import ('../views/Knowledge/Knowledge.vue')
const KnowledgeItem = () =>
    import ('../views/Knowledge/KnowledgeCom/KnowItem.vue')


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/index',
    name: 'Index',
    component: Home
}, {
    path: '/certificatequery',
    name: 'Certificatequery',
    component: CertificateQuery
}, {
    path: '/about',
    component: Introduction,
}, {
    path: '/certificate',
    component: Certificate
}, {
    path: '/consulting',
    name: 'Consulting',
    component: Consulting,
    children: [{
        path: '/',
        redirect: 'list'
    }, {
        path: 'list',
        component: List
    }, {
        path: 'reflect',
        component: Reflect
    }, {
        path: 'apply',
        component: Apply
    }]
}, {
    path: '/server',
    name: 'Server',
    component: Server,
    children: [{
        path: '',
        redirect: 'list'
    }, {
        path: 'list',
        component: ServerList
    }, {
        path: 'reflect',
        component: ServerReflect
    }, {
        path: 'apply',
        component: ServerApply
    }]
}, {
    path: '/dynamic',
    name: 'Dynamic',
    component: Dynamic,
    children: [{
        path: '/',
        redirect: 'item'
    }, {
        path: 'item',
        component: Item
    }, {
        path: 'news',
        component: News
    }]
}, {
    path: '/serverdetails/:id',
    component: ServerDetails
}, {
    path: '/equipment/:id/:name',
    component: EquipmentDetails
}, {
    path: '/newsdetails/:id',
    component: NewsDetails
}, {
    path: '/instrumentdetails',
    component: InstrumentDetails
}, {
    path: '/instrumentdetail',
    component: InstrumentDetail
}, {
    path: '/applyitem',
    component: ApplyItem
}, {
    path: '/casedetails/:id',
    component: CaseDetails
}, {
    path: '/trainserver',
    component: TrainServer,
    children: [{
        path: '/',
        redirect: 'notice'
    }, {
        path: 'notice',
        component: Notice
    }, {
        path: 'download',
        component: Download
    }, {
        path: 'enlist',
        component: Enlist
    }]
}, {
    path: '/newscenter',
    component: NewsCenter,
    children: [{
        path: '',
        redirect: 'regulations'
    }, {
        path: 'regulations',
        component: Regulations
    }, {
        path: 'letters',
        component: Letters
    }, {
        path: 'newsitem',
        component: NewsItem
    }]
}, {
    path: '/experteam',
    component: ExpertTeam
}, {
    path: '/knowledge',
    component: Knowledge,
    children: [{
        path: '/',
        redirect: 'knowledgeitem'
    }, {
        path: 'knowledgeitem',
        component: KnowledgeItem
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    // 路由跳转页面在最顶部显示
    scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router