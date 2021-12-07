<template>
<table>
    <div v-if="!edit">
    <tr>
      <th>Név</th>
      <th>Ár</th>
      <th>Darabszám</th>
      <th>Operations</th>
    </tr>
    <tr>
        <td> {{title}} </td>
        <td> {{price}} </td>
        <td> {{quantity}} </td>
        <td><button @click="Törlés">X</button></td>
      <tr>
          <td><input type="text" v-model="title">
          <td><input type="number" v-model="price">
          <td><input type="number" v-model="quantity">
          <td><button @click="Edit">Edit</button></td>
    </tr>
    </div>
    <div v-if="edit">
        <td><input type="text" v-model="title">
          <td><input type="number" v-model="price">
          <td><input type="number" v-model="quantity">
          <td><button @click="Save">Save</button></td>    
    </div>

</table>
  
</template>

<script>
export default {
    props: ['bill'],
    data() {
        return {
            title: this.bill.title,
            price: this.bill.price,
            quantity: this.bill.quantity,
            edit: false,
            delete: false,
        }
    },
        methods: {
            Edit() {
                this.edit = true
            },
            Delete() {
                this.delete = true

            },
            Save() {
                this.edit = false

            }


        }
         
    }


</script>

<style>

</style>