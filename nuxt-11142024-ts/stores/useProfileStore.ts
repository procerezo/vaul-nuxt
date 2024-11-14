interface Product {
  id: number
  title: string
  description: string
  image: string
  price: number
  category: string
}


export default defineStore('profile',()=>{
	const products = ref<Product[]>([])
	const elvan = ref('elvan')
	const loading = ref(false)

	const fetchProducts = async () => {
		try{
			loading.value = true
			const response = await fetch('https://fakestoreapi.com/products')
			const data = await response.json()
			products.value = data
			console.log(data)
		}catch(e: any){
			console.error(e)
		}finally{
			setTimeout(() => loading.value = false, 2000)
			
		}
	}

	return {
		products,
		fetchProducts,
		elvan,
		loading
	}
})