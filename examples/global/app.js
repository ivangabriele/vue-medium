Vue.use(VueMedium);

var app = new Vue({
  el: '#app',
  data: {
    content: [
      '<h1>vue-medium</h1>'
      '<p>Click here to edit my description !</p>'
    ].join('\n')
  }
});
