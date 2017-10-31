// 使用 Mock
var Mock = require('mockjs')
// 输出结果
console.log(JSON.stringify(data, null, 4))
//使用mockjs模拟数据
var data = Mock.mock({
    'lists|1-10': [{
        'id|+1': 1,
        'date':'@date',
        'intro':'@ctitle()',
        'address':'@county(true)'
    }]
})

Mock.mock('/api/data', (req, res) => {
    return  data.lists;
})













// const express = require('express')
// const router = express.Router()
// const Mock = require('mockjs')
// var Random=Mock.Random
// router.get('/data',(req,res)=>{
//     const mockdata={
//         email:Random.email()
//     }
//     res.json(mockdata);
// })
// module.exports=router;
