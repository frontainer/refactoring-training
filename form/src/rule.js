import Validators from './validators/validators'

export default {
  name: {
    value: null,
    error: false,
    errorMessages: [],
    validations: [
      [Validators.required(), '名前を入力してください']
    ]
  },
  age: {
    value: null,
    error: false,
    validations: [
      [Validators.required(), '年齢を入力してください'],
      [Validators.range(0, 130), '年齢は0から130の間で入力してください']
    ]
  },
  gender: {
    value: '男性',
    error: false,
    validations: [
      [Validators.required(), '性別を入力してください']
    ]
  },
  job: {
    value: '会社員',
    error: false,
    validations: [
      [Validators.required(), '職業を入力してください']
    ]
  },
  jobName: {
    value: null,
    error: false,
    errorMessages: [],
    validations: [
      [
        Validators.required(() => {
          return this.inputs.job.value === 'その他'
        }),
        '職業名を入力してください'
      ]
    ]
  },
  body: {
    value: null,
    error: false,
    validations: [
      [Validators.required(), 'お問い合わせ内容を入力してください']
    ]
  },
  agreement: {
    value: false,
    error: false,
    errorMessages: [],
    validations: [
      [
        Validators.match((value) => {
          return value === true
        }), '規約に同意してください']
    ]
  }
}