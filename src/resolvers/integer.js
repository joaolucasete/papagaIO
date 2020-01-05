module.exports = {
  type: 'int',
  resolve: (content, { min = 0, max = Infinity, multiple = false }) => {
    const num = parseInt(content, 10)
    if (isNaN(num)) {
      return Promise.reject('int.NOT_INT')
    }
    if (num > max) {
      return Promise.reject('int.MAX')
    }
    if (num < min) {
      return Promise.reject('int.MIN')
    }
    if (multiple)
      if (num % multiple !== 0)
        return Promise.reject('int.NOT_MULTIPLE', { multiple })
    return Promise.resolve(num)
  }
}
