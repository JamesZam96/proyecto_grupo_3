<template>
    <div>
        <b-table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp" striped hover :items="items" :fields="fields" style="margin: 15px;"></b-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: 'name_product',
            label: 'Nombre del producto',
            sortable: true
          },
          {
            key: 'quantity',
            label: 'Cantidad disponible',
            sortable: true
          },
          {
            key: 'min_quantity',
            label: 'Cantidad mínima establecida',
            sortable: true,
          },
          {
            key: 'due_date',
            label: 'Fecha de vencimiento',
            sortable: true, 
          }
        ],
        items: [
          { name_product: 'producto' , quantity: 40, min_quantity: 4, due_date: '01/01/1991' },
          { name_product: 'producto' , quantity: 21, min_quantity: 10, due_date: '01/01/1991' },
          { name_product: 'producto' , quantity: 89, min_quantity: 5, due_date: '01/01/1991' },
          { name_product: 'producto' , quantity: 38, min_quantity: 7, due_date: '01/01/1991' }
        ]
      }
    }
  }
</script>