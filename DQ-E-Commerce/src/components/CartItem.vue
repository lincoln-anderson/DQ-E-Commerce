<template>
	<p> {{ item.name }}</p>
	<p> {{ item.stats }}</p>
	<p> {{ item.price }}</p>
	<p> {{ quantity  }}</p>
	
	
</template>


<script>
	export default {
		name: "CartItem",
		props: {
			item: {
				type: Object
			},
			quantity: {
				type: Number
			}
		}
	}
	
</script>