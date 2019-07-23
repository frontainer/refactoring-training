<template>
  <form novalidate @submit="checkForm" method="post">
    <div class="field">
      <CustomInput type="text" label="名前" :rule="inputs.name" />
    </div>

    <div class="field">
      <CustomInput type="text" label="年齢" :rule="inputs.age"  />
    </div>

    <div class="field">
      <label class="label">性別</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="gender" value="男性" v-model="inputs.gender.value">
          男性
        </label>
        <label class="radio">
          <input type="radio" name="gender" value="女性" v-model="inputs.gender.value">
          女性
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">職業</label>
      <div class="control">
        <div class="select">
          <select name="job" v-model="inputs.job.value">
            <option>会社員</option>
            <option>自営業</option>
            <option>公務員</option>
            <option>学生</option>
            <option>その他</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field field-option" id="js-job-name" :hidden="inputs.job.value !== 'その他'">
      <CustomInput type="text" label="職業名" :rule="inputs.jobName" />
    </div>

    <div class="field">
      <CustomTextArea label="お問い合わせ内容" :rule="inputs.body" />
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          規約に同意する <input type="checkbox" name="agreement" v-model="inputs.agreement.value" required>
          <p class="help is-danger">規約に同意してください</p>
        </label>
      </div>
    </div>


    <div class="field">
      <div class="control">
        <button type="submit" class="button is-link">送信</button>
      </div>
    </div>
  </form>
</template>

<script>
  import CustomInput from './components/CustomInput'
  import CustomTextArea from './components/CustomTextArea'
  import rules from './rule'
  import {validate} from './validators/validators'
  export default {
    name: 'app',
    components: {
      CustomInput,
      CustomTextArea
    },
    data() {
      return {
        inputs: rules
      }
    },
    methods: {
      check(key) {
        const { value, validations } = this.inputs[key]
        return validate(value, validations)
      },
      checkForm: function (e) {
        e.preventDefault()
        const results = Object.keys(this.inputs).map((key) => {
          const { value, validations } = this.inputs[key]
          const errorMessages = []
          if (validations) {
            validations.forEach((vlist) => {
              if (vlist[0](value)) {
                return true
              }
              errorMessages.push(vlist[1])
              return false
            })
            this.inputs[key].error = true
            console.log(this.inputs[key])
            return {
              key,
              error: errorMessages.length !== 0,
              errorMessages
            }
          }
          this.inputs[key].error = false
          return {
            key,
            error: false,
            errorMessages
          }
        })
        const error = results.some(result => result.error === true)
        console.log(results, error)
        if (error) {
          alert('入力エラー')
        }
      }
    }
  }
</script>
