<script setup lang="ts">

const productStore = useProfileStore()
const { fetchProducts } = productStore
const { products, loading } = storeToRefs(productStore)

onMounted(async () => {
 	await fetchProducts()
})

</script>

<template>
	<div class="container mx-auto" >
		<div class="container mx-auto p-2" >
			<h1 class="font-bold text-3xl">im dashboard</h1>
			<button class="ml-2 px-4 py-2 font-bold border bg-green-400 hover:bg-green-500 rounded">Submit</button>
		</div>
		<div class="min-h-screen flex justify-center text-[150px]" v-if="loading" ><Icon name="svg-spinners:bars-scale" /></div>
		<div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="relative rounded-lg shadow-black border border-2 hover:scale-125 duration-700 bg-white" v-for="p of products" :key="p.id">
				<div class="aspect-square p-2 ">
					<div class="aspect-square mb-4">
		              <img 
		                :src="p.image" 
		                :alt="p.title"
		                class="h-full w-full object-contain"
		              >
		            </div>
					<h3 class="">{{ p.title }}</h3>
					<h3 class="absolute top-3 right-3 font-bold"><span class="border rounded-lg px-3 py-2 bg-yellow-500">$ {{ p.price }}</span></h3>
				</div>
			</div>
		</div>
	</div>

	
</template>

<style> 
*{
/*	outline: 1px solid black;*/
}
</style>