<script>
	export default {
		name: "itemCard",
		props: ['weapons'],
}
	
</script>

<template>
	<div v-for="weapon in weapons.weapons">
		
		<h1> {{ weapon.name }}: +{{ weapon.stats }} Price: {{ weapon.price }}</h1>
		
	</div>
	
	
</template>