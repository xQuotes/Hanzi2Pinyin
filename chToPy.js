import reduce from 'lodash.reduce'
import source from './sourceHanzi.js'

export default function chToPy(zhongwen) {
  const res = zhongwen.split('')
  return reduce(
    res,
    (previousValue, currentDigit) => {
      const pinyin =
        typeof source[currentDigit] === 'object' ? source[currentDigit][0] : source[currentDigit]
      previousValue += `${pinyin || currentDigit} `
      return previousValue
    },
    ''
  )
}
