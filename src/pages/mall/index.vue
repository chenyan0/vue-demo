<template>
<div class="pad-head">
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
                        <li  v-for="(item,index) in prod.list" :key="index">
                        <router-link :to="{path:'mall/detail/'+index}" > 
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
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-row class="mg-t">
                    <el-col :span="7" v-for="(o, index) in boardList" :key="o" :offset="index > 0 ? 1 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="../../../static/op.jpg" class="image">
                            <div style="padding: 14px;">
                                <span >{{o.title}}</span>
                                <p>{{o.description}}</p>   
                                <div class="bottom clearfix">
                               
                                    <el-button> <router-link :to="{path:'detail/'+o.id}">立即购买</router-link></el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
    
            </div>
        </el-col>
    
    </el-row>

</div>
  
</template>
<script>
export default {
    data() {
        return {
            products:{
                pc:{
                    title:'PC产品',
                    list:[
                        {
                            name:'数据统计',
                            src:''
                        },
                        {
                            name:'数据预测',
                            src:'',
                               hot: true

                        },
                        {
                            name:'流量分析',
                            src:''
                        },
                        {
                            name:'广告发布',
                            src:''
                        }
                    ]
                },
                app:{
                    title:'手机应用类',
                    list:[
                        {
                            name:'91助手',
                            src:'',
                               hot: true
                        },
                        {
                            name:'产品助手',
                            src:''

                        }
                    ]
                }
            },
               boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
      ],
        };
    }
}
</script>
<style lang="scss" scope>

.el-card__header{
    padding: 2px 20px;
        background: #41b883;color: #fff;
}
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 350px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.mall-main {
    width: 1200px;
    margin: 20px auto!important;
}


.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}


.text {
    font-size: 14px;
    li{
            padding: 6px 0;
    }
    a{
        color: #666;
    text-decoration: none;
    font-size: 16px;
        }
    .tag-hot{
    background: #ff1212;
    padding: 0 4px;
    font-size: 12px;
    color: #fff;
}
}

.item {
    padding: 8px 0;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.mg-t {
    margin-top: 20px;
}
</style>

