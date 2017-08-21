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
    stash.push(trimZh(returnMZh(fillVal(val), Num).reverse().join(''), 'c_r'))

    if (key === 1) {
      stash[key] = `${stash[key]}万`
    }
    if (key === 2) {
      stash[key] = `${stash[key]}亿`
    }
  })

  return trimZh(stash.reverse().join(''), 'l')
}
