<script setup lang="ts">
interface Product {
  id: number
  title: string
  description: string
  image: string
  price: number
  category: string
}

const { data: products, pending, error } = await useFetch<Product[]>('https://fakestoreapi.com/products', {
  key: 'products',
  onError: (error: any) => {
    console.error('Failed to fetch products:', error)
  }
})

const email = ref('')
const handleSubmit = (e: Event) => {
  console.log('Submitted email:', email.value)
  email.value = ''
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Product Catalog</h1>
        <nav class="mb-6">
          <NuxtLink 
            to="/about"
            class="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline"
          >
            About
          </NuxtLink>
        </nav>
        
        <form @submit.prevent="handleSubmit" class="mb-8">
          <div class="flex gap-2 max-w-md">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
            <button 
              type="submit"
              class="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </header>

      <div v-if="pending" class="text-center py-8">
        <p class="text-gray-600">Loading products...</p>
      </div>

      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-600">Error loading products. Please try again later.</p>
      </div>

      <div v-else-if="products" class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Grid View</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="product in products" 
            :key="product.id"
            class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
          >
            <div class="aspect-square mb-4">
              <img 
                :src="product.image" 
                :alt="product.title"
                class="h-full w-full object-contain"
              >
            </div>
            <h3 class="font-medium text-gray-900 mb-2 line-clamp-2">{{ product.title }}</h3>
          </div>
        </div>
      </div>

      <div v-if="products" class="overflow-x-auto">
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
    </div>
  </div>
</template>

<style scoped >
*{
	outline: 1px solid black;
}
</style>