<template>
  <div>
	<ul>
	  <li v-for="(item, index) in items" :key="index">
		  
		  {{ itemQuantities[item.id] }}
		  <CartItem :item=item /> 
	  </li>
	</ul>
  </div>
</template>

<script>
	import CartItem from './CartItem.vue'
	import { defineComponent, ref } from 'vue'
	
	export default {
			name: "Cart",
			props: {
				items: {
					type: Object
				},
				itemQuantities: {
					type: Object
				}
			},
	}
</script>