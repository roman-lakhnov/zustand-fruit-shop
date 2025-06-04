import { products } from './products'
import useCartStore from './store/CartStore'

const ProductLits = () => {
	const addToCart = useCartStore(state => state.addToCart)
	const cart = useCartStore(state => state.cart)
	const removeOneFromCart = useCartStore(state => state.removeOneFromCart)
	return (
		<div>
			<h2>Product Lits</h2>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(6, 1fr)',
					gap: '20px',
					width: '100%'
				}}
			>
				{products.map(product => (
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
								height: '150px',
								objectFit: 'cover',
								borderRadius: '4px'
							}}
						/>
						<p style={{ margin: 0 }}>Price: ${product.price.toFixed(2)}</p>
						{cart.filter(item => item.id === product.id).length < 1 ? (
							<button
								onClick={() => addToCart(product)}
								style={{
									background: '#2196F3',
									color: 'white',
									borderRadius: '4px',
									width: '100%',
									cursor: 'pointer'
								}}
							>
								Add to Cart
							</button>
						) : (
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between'
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
								<p style={{ margin: 0, fontWeight: 'bold' }}>
									{cart.filter(item => item.id === product.id).length}
								</p>
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
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductLits
