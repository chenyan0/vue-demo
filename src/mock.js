// 使用 Mock
var Mock = require('mockjs')
// 输出结果
console.log(JSON.stringify(data, null, 4))
//使用mockjs模拟数据
var data = Mock.mock({
    'tasks|1-10': [{
        'id|+1': 1,
        'date':'@date',
        'name':'@ctitle()',
        'region':'@county(true)',
        'type':'@ctitle()',
        'resource':'@ctitle()',
        'desc':'@ctitle()'
    }],
     'news|1-10': [{
        'id|+1': 1,
        'title':'@ctitle()',
        'url':'@url'
    }],
     'banners|3': [{
        'id|+1': 1,
        'name':'@ctitle()',
        'src':"@dataImage('880x350', '!')"
    }],
})
var order=Mock.mock({
    'list|1-5':[{
        'id|10000-200':10000,
         'name': '@ctitle()',
        'category|1':[
    "AMD",
    "CMD",
    "UMD"
  ],
        'desc': '@ctitle()',
        'address': '@county(true)',
        'shop': '@ctitle()',
        'shopId|10000-20000':20000
    }]
})
Mock.mock('/api/tasks', (req, res) => {
    return  data.tasks;
})
Mock.mock('/api/tasks/add', (req, res) => {
    return ;
})
Mock.mock('/api/getNews', (req, res) => {
    return data.news;
})
Mock.mock('/api/getBanners', (req, res) => {
    return data.banners;
})
Mock.mock('/api/getOrderList', (req, res) => {
    return order.list;
})












