<template>
  <div id="app">
    <Bill :bills="bills"  
      @bill-item-changed="Changed"
      @bill-item-deleted="Delete"/>
  </div>
</template>

<script>
import Bill from './components/Bill.vue'


export default {
  name: 'App',
  components: {
    Bill
  },
  data() {
    return {
      bills: [
        {
          title: 'Kerék',
          price: 100,
          quantity: 12
        },
        {
          title: 'Teleszkóp',
          price: 1000,
          quantity: 300
        },
        {
          title: 'Kormány',
          price: 230,
          quantity: 5
        },
        {
          title: 'Ajtó',
          price: 45120,
          quantity: 321
        },
      ]
    }
  },
  methods: {
    Changed(e) {
      this.bills.map(function (bill) {
        if (bill.title != e.original.title || bill.price != e.original.price || bill.quantity != e.original.quantity) {
          return bill;
        }
        

      })

    },
    Deleted(e) {
      this.bills = this.bills.filter((bill) => e.original != bill)
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
