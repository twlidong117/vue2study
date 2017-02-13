var data = {
  games: window.games,
  cash: 5000,
}
var app = new Vue({
  el: '#app',
  data: data,
  computed: {
    wishList: function () {
      return this.games.filter(function (game) {
        return !game.purchased
      })
    },
    myGames: function () {
      return this.games.filter(function (game) {
        return game.purchased
      })
    },
    balance: function () {
      let sum = 0
      this.myGames.forEach(function (item, index) { 
        sum += item.price
      })
      return this.cash - sum
    }
  },
  methods: {
    buyItems: function (id) {
      this.games[--id].purchased = true
    },
    rmItems: function (id) {
      this.games[--id].purchased = false
    }
  }
});