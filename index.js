require('babel-register')
const transform = require('./chToPy')

const res = transform.default('您好')
const res1 = transform.default('于老师，我爱你')

console.log(res)
console.log(res1)
