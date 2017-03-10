import MediumEditor from 'medium-editor'

export function install(Vue, options) {
  options = options || {}

  Vue.component('medium', {
    template: '<div @input="updateValue" v-html="localValue"></div>',

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
  })
}
