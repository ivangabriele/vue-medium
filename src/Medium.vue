<template>
  <div @input="updateValue" v-html="localValue"></div>
</template>

<script>
  import MediumEditor from 'medium-editor'

  module.exports = {
    props: ['value'],

    data: () => ({
      localValue: '',
    }),

    mounted: function() {
      this.localValue = this.value

      new MediumEditor(this.$el, Object.assign({
        placeholder: {
          text: this.value ? '' : 'Type your text',
        },
      }, options))
    },

    methods: {
      updateValue: function(event) {
        this.$emit('input', event.target.innerHTML)
      },
    },
  }
</script>
