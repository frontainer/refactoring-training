export default {
  /**
   * 必須バリデーション
   * @param condition? () => boolean
   * @returns {Function} (val: string | number) => boolean
   */
  required: (condition = null) => (val) => {
    if (!condition || condition()) {
      return (!!val || val === 0)
    }
    return true
  },
  range: (min = NaN, max = NaN) => (val) => {
    let result = true
    if (!isNaN(min)) {
      if (val < min) {
        result = false
      }
    }
    if (!isNaN(max)) {
      if (max < val) {
        result = false
      }
    }
    return result
  },
  match: (condition) => (val) => {
    return condition(val)
  }
}

export function validate(validations) {

}