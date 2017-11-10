<template>
    <el-row :gutter="20" :span="24" class="mall-main">
        <el-col :span="6">
            <div class="grid-content">
                <el-card class="box-card">
                    <div slot="header">
                        <span>全部产品</span>
                    </div>
                    <div v-for="(prod,index) in products" :key="index" class="text item">
                        <h3>{{prod.title}}</h3>
                        <ul>
                            <li v-for="(item,index) in prod.list" :key="index">
                                <router-link :to="{path:'detail/'+index}">
                                    {{item.name }}
                                </router-link>
                                <span v-if="item.hot" class="tag-hot">Hot</span>
                            </li>
    
                        </ul>
                    </div>
                </el-card>
                <el-card class="box-card mg-t">
                    <div slot="header">
                        <span>最新消息</span>
                    </div>
                    <div v-for="(o,index) in newsList" :key="index" class="text item">
                        <a :href="o.url">{{ o.title }}</a>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="18">
            <div class="grid-content ">
                <div class="block">
                    <el-carousel height="350px">
                        <el-carousel-item v-for="(item,index) in imgs" :key="index">
                            <img :src="item.src" :title=" item.name ">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-row class="mg-t buyBlock" :gutter="20">
                    <el-col :span="12" v-for="(o, index) in boardList" :key="index">
                        <el-card>
                            <img :src="o.src" class="image">
                            <div class="intro">
                                <span>{{o.title}}</span>
                                <p>{{o.description}}</p>
                                <div class="bottom clearfix">
                                    <el-button>
                                        <router-link :to="{path:'detail/'+o.id}">立即购买</router-link>
                                    </el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
    
            </div>
        </el-col>
    
    </el-row>
</template>
<script>
import API from '../../api/api'
const api= new API();
const Err_OK = 0;
export default {
    mounted() {
        let   params={
            api:'/api/getNews',

        };
        api.getTask(params).then((res) => {
            //   response=response.body;
            if (res) {
                this.newsList = JSON.parse(res.data);
            }
        });
        // api.get('/api/getBanners').then((response) => {
        //     //   response=response.body;
        //     if (response) {
        //         this.imgs = response.body;
        //         console.log(response);
        //     }
        // })
    },
    data() {
        return {
            newsList: [],
            imgs: [{
                src: require('../../assets/images/pic1.jpg'),
                name: '1'
            }, {
                src: require('../../assets/images/pic2.jpg'),
                name: '1'
            }, {
                src: require('../../assets/images/pic3.jpg'),
                name: '1'
            }],
            products: {
                pc: {
                    title: 'PC产品',
                    list: [
                        {
                            name: '数据统计',
                            src: ''
                        },
                        {
                            name: '数据预测',
                            src: '',
                            hot: true

                        },
                        {
                            name: '流量分析',
                            src: ''
                        },
                        {
                            name: '广告发布',
                            src: ''
                        }
                    ]
                },
                app: {
                    title: '手机应用类',
                    list: [
                        {
                            name: '91助手',
                            src: '',
                            hot: true
                        },
                        {
                            name: '产品助手',
                            src: ''

                        }
                    ]
                }
            },
            boardList: [
                {
                    title: '开放产品',
                    description: '开放产品是一款开放产品',
                    id: 'analysis',
                    toKey: 'analysis',
                    saleout: false,
                    src: require('../../assets/images/1.png')

                },
                {
                    title: '品牌营销',
                    description: '品牌营销帮助你的产品更好地找到定位',
                    id: 'forecast',
                    toKey: 'count',
                    saleout: false,
                    src: require('../../assets/images/2.png')

                },
                {
                    title: '使命必达',
                    description: '使命必达快速迭代永远保持最前端的速度',
                    id: 'count',
                    toKey: 'forecast',
                    saleout: true,
                    src: require('../../assets/images/3.png')

                },
                {
                    title: '勇攀高峰',
                    description: '帮你勇闯高峰，到达事业的顶峰',
                    id: 'hill',
                    toKey: 'publish',
                    saleout: false,
                    src: require('../../assets/images/4.png')

                },
            ],
        };
    }
}
</script>
<style lang="scss" scoped>
@import "../../styles/mall.scss";
</style>
<style lang="scss" >
.grid-content {
    .el-card__header {
        padding: 10px 20px;
        background: #f5c280;
        color: #fff;
        border-bottom: 0;
    }
}
</style>



