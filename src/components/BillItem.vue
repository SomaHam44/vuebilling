<template>
<table>
      <th>Név</th>
      <th>Ár</th>
      <th>Darabszám</th>
      <tr>
          <td><input type="text" v-model="title">
          <td><input type="number" v-model="price">
          <td><input type="number" v-model="quantity">
        </tr>

</table>
  
</template>

<script>
export default {
    props: ['bill'],
    data() {
        return {
            title: this.bill.title,
            price: this.bill.price,
            quantity: this.bill.quantity
        }
         
    }

}
</script>

<style>

</style>