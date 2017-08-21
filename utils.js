export function slitNum(str = '', num = 3) {
  // 替换掉非数字和.
  str = `${str}`.replace(/[^(\d.)]*/g, '')
  // 字符串没有反转方法，故需要先转成数组
  str = str.split('').reverse().join('')
  const reg = new RegExp(`(\\d{${num}})(?=\\d)`, 'g')
  // 可以尝试不加正则后面的(?=\d),在输入的数字刚好是3的整数倍时就会出现问题
  str = str.replace(reg, '$1,')
  str = str.split('').reverse().join('')
  return str
}

export function returnMZh(str = '', source = []) {
  const result = str.map((v) => {
    if (v === '0') {
      return ''
    }
    return source.find(value => value.num === v).mzh
  })

  console.log('result', result)

  if (result[0]) result[0] = `${result[0]}`

  if (result[1]) result[1] = `${result[1]}拾`

  if (result[2]) result[2] = `${result[2]}佰`

  if (result[3]) result[3] = `${result[3]}仟`
  else {
    if (result[2] || (result[1] || result[0])) {
      result[3] = `零${result[3]}`
    }
    if (!result[2] && (result[1] || result[0])) {
      result[2] = `零${result[2]}`
    }

    if (result[2] && !result[1] && result[0]) {
      result[1] = `零${result[1]}`
    }
  }

  return result
}

export function fillVal(arr, val = '0') {
  return arr.concat(Array(4 - arr.length).fill(val))
}

export function chunk(source = [], num = 1) {
  num *= 1
  const res = []
  source.forEach((item, i) => {
    if (i % num === 0) {
      res.push([])
    }
    res[res.length - 1].push(item)
  }, this)
  return res
}
