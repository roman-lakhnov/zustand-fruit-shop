import Modal from './Modal'

interface SuccessModalProps {
	isOpen: boolean
	onClose: () => void
	totalAmount: number
}

const SuccessModal = ({ isOpen, onClose, totalAmount }: SuccessModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Order Confirmed!'>
			<div style={{ textAlign: 'center', padding: '20px 0' }}>
				<div
					style={{
						width: '80px',
						height: '80px',
						margin: '0 auto 20px',
						borderRadius: '50%',
						backgroundColor: '#4CAF50',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 24 24'
						fill='none'
						stroke='white'
						strokeWidth='3'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<polyline points='20 6 9 17 4 12'></polyline>
					</svg>
				</div>
				<h3 style={{ margin: '0 0 10px', color: '#4CAF50' }}>
					Thank you for your purchase!
				</h3>
				<p style={{ margin: '0 0 20px', fontSize: '18px' }}>
					Your order has been successfully placed.
				</p>
				<p style={{ fontWeight: 'bold', fontSize: '20px', margin: '0 0 30px' }}>
					Total: ${totalAmount.toFixed(2)}
				</p>
				<button
					onClick={onClose}
					style={{
						padding: '10px 20px',
						backgroundColor: '#4CAF50',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
						fontSize: '16px',
						fontWeight: 'bold'
					}}
				>
					Continue Shopping
				</button>
			</div>
		</Modal>
	)
}

export default SuccessModal
