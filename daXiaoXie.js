import Num from './sourceNum.js'
import { slitNum, returnMZh, fillVal, chunk } from './utils'

export default function transformNum(str) {
  if (isNaN(Number(str))) {
    return str
  }
  str = `${str}`.replace(/[^(\d.)]*/g, '')
  let res = str.split('').reverse()
  res = chunk(res, 4)
  const stash = []

  res.forEach((val, key) => {
    console.log(val)
    stash.push(returnMZh(fillVal(val), Num))
    if (key === 1) {
      stash[key].push('万')
    }
    if (key === 2) {
      stash[key].push('亿')
    }
  })

  return stash
}
