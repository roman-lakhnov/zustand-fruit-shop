import { type Product } from './products'
import useCartStore from './store/CartStore'

const Cart = () => {
	const cart = useCartStore(state => state.cart)
	// const cart= useCartSelectors.use.cart()
	const removeOneFromCart = useCartStore(state => state.removeOneFromCart)
	const removeAllFromCart = useCartStore(state => state.removeAllFromCart)
	const addToCart = useCartStore(state => state.addToCart)
	const clearCart = useCartStore(state => state.clearCart)
	// here is example of using selectors
	// const clearCart = useCartSelectors.use.clearCart()

	const groupedItems = cart.reduce<
		Record<number, { product: Product; quantity: number }>
	>((acc, product) => {
		if (!acc[product.id]) {
			acc[product.id] = { product, quantity: 0 }
		}
		acc[product.id].quantity += 1
		return acc
	}, {})

	// Расчет общей суммы
	const totalAmount = cart.reduce((sum, item) => sum + item.price, 0)

	return (
		<div>
			<h2>Cart</h2>
			{cart.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(4, 1fr)',
							gap: '20px',
							width: '100%',
							marginBottom: '20px'
						}}
					>
						{Object.values(groupedItems).map(({ product, quantity }) => (
							<div
								key={product.id}
								style={{
									border: '1px solid #ccc',
									padding: '10px',
									borderRadius: '5px'
								}}
							>
								<h3 style={{ margin: 0 }}>{product.name}</h3>
								<img
									src={product.image}
									alt={product.name}
									style={{
										width: '100%',
										height: '220px',
										objectFit: 'cover',
										borderRadius: '4px'
									}}
								/>
								<p style={{ margin: 0 }}>Price: ${product.price.toFixed(2)}</p>
								<p style={{ margin: 0 }}>Quantity: {quantity}</p>
								<p style={{ margin: 0 }}>
									Subtotal: ${(product.price * quantity).toFixed(2)}
								</p>

								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-around'
									}}
								>
									<button
										onClick={() => addToCart(product)}
										style={{
											background: '#4CAF50',
											color: 'white',
											borderRadius: '4px',
											cursor: 'pointer',
											fontWeight: 'bold'
										}}
									>
										+
									</button>

									<button
										onClick={() => removeOneFromCart(product.id)}
										style={{
											background: '#FF5252',
											color: 'white',
											borderRadius: '4px',
											cursor: 'pointer',
											fontWeight: 'bold'
										}}
									>
										-
									</button>
									<button
										onClick={() => removeAllFromCart(product.id)}
										style={{
											background: '#FF5252',
											color: 'white',
											borderRadius: '4px',
											cursor: 'pointer'
										}}
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>
					<div
						style={{
							textAlign: 'right',
							marginTop: '20px',
							fontSize: '1.2rem',
							fontWeight: 'bold'
						}}
					>
						Total: ${totalAmount.toFixed(2)}
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							marginTop: '20px'
						}}
					>
						<button
							onClick={() => clearCart()}
							style={{
								padding: '10px 20px',
								backgroundColor: '#FF5252',
								color: 'white',
								borderRadius: '4px',
								cursor: 'pointer'
							}}
						>
							Clear Cart
						</button>
						<button
							style={{
								marginLeft: '10px',
								padding: '10px 20px',
								backgroundColor: '#4CAF50',
								color: 'white',
								borderRadius: '4px',
								cursor: 'pointer'
							}}
						>
							Checkout
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Cart
