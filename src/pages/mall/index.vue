<template>
    <el-row :gutter="20" :span="24" class="mall-main">
        <el-col :span="6">
            <div class="grid-content">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">全部产品</span>
                    </div>
                    <div v-for="(prod,index) in products" :key="index" class="text item">
                        <h3>{{prod.title}}</h3>
                        <ul>
                            <li v-for="(item,index) in prod.list" :key="index">
                                <router-link :to="{path:'mall/detail/'+index}">
                                    {{item.name }}
                                </router-link>
                                <span v-if="item.hot" class="tag-hot">Hot</span>
                            </li>
    
                        </ul>
                    </div>
                </el-card>
                <el-card class="box-card mg-t">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">最新消息</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="18">
            <div class="grid-content ">
                <div class="block">
                    <el-carousel height="350px">
                        <el-carousel-item v-for="item in imgs" :key="item">
                            <img :src="item.src" :title=" item.name ">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-row class="mg-t">
                    <el-col :span="7" v-for="(o, index) in boardList" :key="o" :offset="index > 0 ? 1 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="../../assets/images/op.jpg" class="image">
                            <div style="padding: 14px;">
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
export default {
    data() {
        return {
            imgs:[{
                src:require('../../assets/images/pic1.jpg'),
                name:'1'
            },{
                src:require('../../assets/images/pic2.jpg'),
                name:'1'
            },{
                src:require('../../assets/images/pic3.jpg'),
                name:'1'
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
                    saleout: false
                },
                {
                    title: '品牌营销',
                    description: '品牌营销帮助你的产品更好地找到定位',
                    id: 'forecast',
                    toKey: 'count',
                    saleout: false
                },
                {
                    title: '使命必达',
                    description: '使命必达快速迭代永远保持最前端的速度',
                    id: 'count',
                    toKey: 'forecast',
                    saleout: true
                },
            ],
        };
    }
}
</script>
<style lang="scss" scoped>
@import "../../styles/mall.scss";
</style>


