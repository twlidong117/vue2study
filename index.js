var data = {
  info: 'data-info,obj',
  list: [
    'item1','item2','item3','item4'
  ],
  userInput: ''
}
var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    addItem: function () {
      this.list.push(this.userInput)
      this.userInput = ''
    },
    removeItem: function () {
      this.list.pop();
    }
  }
})