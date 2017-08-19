module.exports = {
  // babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint
  // https://www.npmjs.com/package/babel-eslint
  // http://eslint.org/docs/rules/

  /**
     *  "off" 或 0 - 关闭规则
     *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  rules: {
    //  禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': 0,
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: [2, 'never'],
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, { functions: 'never' }],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }]
  }
}
