<template>
<table>
    
    <tr v-if="!edit">
        <td> {{title}} </td>
        <td> {{price}} </td>
        <td> {{quantity}} </td>
        <td><button @click="Delete">X</button><button @click="Edit">Edit</button></td>
        <td> {{price * quantity}}</td>
    </tr>
     <tr v-if="!edit">
          <td><input type="text"></td>
          <td><input type="number"></td>
          <td><input type="number"></td>
          <td><button @click="New">New</button></td>
      </tr>
        <tr v-if="edit">
        <td><input type="text" v-model="title"></td>
          <td><input type="number" v-model="price">
          <td><input type="number" v-model="quantity"></td>
          <td><button @click="Save">Save</button></td>
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
            quantity: this.bill.quantity,
            edit: false,
        }
    },
        methods: {
            Edit() {
                this.edit = true
            },
            Delete() {
                this.title = "";
                this.price = "";
                this.quantity = "";

            },
            Save() {
                this.edit = false
                this.$emit('bill-title-changed', {
                    original: this.bill,
                    new: {
                        title: this.title
                    },

                }),

                this.$emit('bill-price-changed', {
                    original: this.bill,
                    new: {
                        price: this.price,
                    },
                }),

                this.$emit('bill-quantity-changed', {
                    original: this.bill,
                    new : {
                        quantity: this.quantity
                    }
                })

            },


        }
         
    }


</script>

<style>

</style>