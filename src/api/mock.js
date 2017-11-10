
// 使用 Mock
var Mock = require('mockjs')
// 输出结果
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
    return '';
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
Mock.mock('/api/login', (req, res) => {
    return 1;
})
Mock.mock('/api/tasks/paged', (req, res) => {
    return  data.tasks;
})




// var express=require('express'),
// app     = express(),
// Mock    = require('mockjs');
// var Random=Mock.Random
// // var fs = require('fs')
// app.get('/tasks',(req,res)=>{
//     var mockData={
//         email:Random.email()
//     }
//     res.json(mockData);
// })
// module.exports = app;

// // 写入到db.json
// fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//  });










