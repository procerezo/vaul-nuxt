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

	<!-- table -->

	<div v-if="products" class="overflow-x-auto container mx-auto mt-10">
        <h2 class="text-2xl font-semibold mb-6">Table View</h2>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">Title</th>
              <th class="px-4 py-3">Description</th>
              <th class="px-4 py-3">Image</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr 
              v-for="product in products" 
              :key="product.id"
              class="bg-white hover:bg-gray-50"
            >
              <td class="px-4 py-3">{{ product.id }}</td>
              <td class="px-4 py-3 font-medium text-gray-900">{{ product.title }}</td>
              <td class="px-4 py-3">
                <p class="line-clamp-2">{{ product.description }}</p>
              </td>
              <td class="px-4 py-3">
                <img 
                  :src="product.image" 
                  :alt="product.title"
                  class="h-20 w-20 object-contain"
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>

	
</template>

<style> 
*{
/*	outline: 1px solid black;*/
}
</style>