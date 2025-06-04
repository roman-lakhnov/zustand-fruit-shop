import { create } from 'zustand'
import { type Product } from '../products'
import { createSelectors } from './createSelectors'

// Define the CartState interface
interface CartState {
	cart: Product[]
	addToCart: (product: Product) => void
	removeAllFromCart: (productId: number) => void
	removeOneFromCart: (productId: number) => void
	clearCart: () => void
}

const useCartStore = create<CartState>(set => ({
	cart: [] as Product[],

	addToCart: (product: Product) =>
		set(state => ({
			cart: [...state.cart, product]
		})),

	removeAllFromCart: (productId: number) =>
		set(state => ({
			cart: state.cart.filter(item => item.id !== productId)
		})),
	removeOneFromCart: (productId: number) =>
		set(state => {
			const productIndex = state.cart.findIndex(item => item.id === productId)
			if (productIndex !== -1) {
				const newCart = [
					...state.cart.slice(0, productIndex),
					...state.cart.slice(productIndex + 1)
				]
				return { cart: newCart }
			}
			return { cart: state.cart }
		}),
	clearCart: () => set({ cart: [] })
}))

export const useCartSelectors = createSelectors(useCartStore)
export default useCartStore
