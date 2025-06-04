import { useEffect } from 'react'
import type { ReactNode } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'auto'
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 1000
			}}
			onClick={onClose}
		>
			<div
				style={{
					backgroundColor: 'white',
					borderRadius: '8px',
					padding: '24px',
					width: '90%',
					maxWidth: '500px',
					maxHeight: '90vh',
					overflow: 'auto',
					position: 'relative',
					animation: 'modalFadeIn 0.3s ease-out'
				}}
				onClick={e => e.stopPropagation()}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: '16px'
					}}
				>
					{title && <h2 style={{ margin: 0 }}>{title}</h2>}
					<button
						onClick={onClose}
						style={{
							background: 'transparent',
							border: 'none',
							fontSize: '24px',
							cursor: 'pointer',
							padding: '0',
							color: '#666',
							lineHeight: '1',
							width: '32px',
							height: '32px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '50%'
						}}
					>
						&times;
					</button>
				</div>
				{children}
			</div>
			<style>
				{`
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
			</style>
		</div>
	)
}

export default Modal
