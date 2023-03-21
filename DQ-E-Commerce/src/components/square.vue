<template>
  <div class="square">
	<div class="label">Square</div>
	<div class="input-wrapper">
	  <input type="text" v-model="input1" class="input">
	</div>
	<div class="input-wrapper">
	  <input type="text" v-model="input2" class="input">
	</div>
	<div class="input-wrapper">
	  <input type="text" v-model="input3" class="input">
	</div>
  </div>
</template>

<script>
	
	export default {
			name: "ItemCard",
			props: {
				input1: '',
				input2: '',
				input3: ''
				}
	}
</script>

<style>
.square {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

.label {
  font-weight: bold;
  margin-bottom: 10px;
}

.input-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  width: 80%;
  padding: 10px;
}
</style>
