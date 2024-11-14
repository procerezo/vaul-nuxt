<script>
const response = await fetch('https://fakestoreapi.com/products')	
const data = ref(await response.json())
console.log("d", data.value)
</script>

<template>
	<ul v-for="p of data">
		<li>{{ p.title }}</li>
	</ul>
</template>

