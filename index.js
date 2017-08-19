require('babel-register')
const transform = require('./transform')

const res = transform.default('您好')

console.log(res)
