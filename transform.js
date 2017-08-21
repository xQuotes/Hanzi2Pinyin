import reduce from 'lodash.reduce'
import source from './source.js'

export function numToCh(num) {
  return reduce(
    source,
    (zh, py) => {
      console.log(zh, py, num)
    },
    ''
  )
}

export function chToPy(zhongwen) {
  const res = zhongwen.split('')
  return reduce(
    res,
    (previousValue, currentDigit, currentIndex, array) => {
      previousValue += source[currentDigit]
      return previousValue
    },
    ''
  )
}
