import './App.css'
import Cart from './components/Cart'
import ProductLits from './components/ProductLits'

function App() {
	return (
		<div className='App'>
			<h1>Welcome to fruit shop</h1>
			<ProductLits />
			<Cart />
		</div>
	)
}

export default App
