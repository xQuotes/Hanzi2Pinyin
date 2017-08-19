require("babel-register")
var transform = require("./transform")

const res = transform.chToPy('您好')

console.log(res)
