<template>
<div>


  <BillItem
    v-for="bill in bills"
    v-bind:key="bill.title" :bill="bill"
    @bill-item-changed="Changed" />

  </div>

</template>

<script>
import BillItem from './components/BillItem.vue'
export default {
  props: ['bills'],
  components: {BillItem},
  methods: {
    Changed(e) {
      this.$emit('bill-title-changed', e),
      this.$emit('bill-price-changed', e),
      this.$emit('bill-quantity-changed', e)

    }

  }
  

}
</script>

<style>

</style> 