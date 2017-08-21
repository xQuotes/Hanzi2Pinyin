import Num from './sourceNum.js'
import { slitNum, returnMZh, fillVal, chunk, trimZh } from './utils'

export default function transformNum(str) {
  if (isNaN(Number(str))) {
    return str
  }
  str = `${str}`.replace(/[^(\d.)]*/g, '')
  let res = str.split('').reverse()
  res = chunk(res, 4)
  const stash = []

  res.forEach((val, key) => {
    stash.push(returnMZh(fillVal(val), Num))

    if (key === 1) {
      stash[key].unshift('万')
    }
    if (key === 2) {
      stash[key].unshift('亿')
    }
  })

  return trimZh(stash.reverse().map(v => trimZh(v.reverse().join(''), 'c_r')).join(''), 'l')
}
