import reduce from 'lodash.reduce'
import source from './source.js'

export default function chToPy(zhongwen) {
  const res = zhongwen.split('')
  return reduce(
    res,
    (previousValue, currentDigit) => {
      previousValue += `${source[currentDigit]} `
      return previousValue
    },
    ''
  )
}
