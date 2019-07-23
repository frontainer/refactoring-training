<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control">
      <textarea class="textarea" :type="type" name="name" v-model="value"></textarea>
      <p class="help is-danger">{{errors}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'custom-textarea',
    data: function() {
      return {
        value: null,
        errorMessage: ''
      }
    },
    computed: {
      errors: function() {
        if (this.value === null) return ''
        let message = ''
        const _this = this
        this.rule.validations.forEach(function(validate) {
          if(!validate[0](_this.value)) {
            message += `${validate[1]} `
          }
        })
        return message
      }
    },
    props: {
      label: String,
      type: String,
      rule: Object
    },
  }
</script>