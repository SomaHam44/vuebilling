<template>
<div>
  <table>
  <tr v-if="!edit">
      <th>Név</th>
      <th>Ár</th>
      <th>Darabszám</th>
      <th>Operations</th>
  </tr>
  </table>
 
  <BillItem
    v-for="bill in bills"
    v-bind:key="bill.title" :bill="bill"
    @bill-item-changed="Changed"
    @bill-item-deleted="Deleted" />
</div>
</template>

<script>
import BillItem from './BillItem.vue'

export default {
  props: ['bills'],
  components: {BillItem},
  methods: {
    Changed(e) {
      this.$emit('bill-title-changed', e),
      this.$emit('bill-price-changed', e),
      this.$emit('bill-quantity-changed', e)

    },
    Deleted(e) {
      this.$emit('bill-item-deleted', e)
    }

  }
  

}
</script>

<style>
th {
  width: 55vw;
 margin-inline: auto;
}
td {
  width: 60vw;
 text-align:center;
}

</style> 