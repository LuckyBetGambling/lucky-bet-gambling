import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledModalBody = styled.div`
`

// const StyledModalHeader = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   font-size: 25px;
// `

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  height: 70px;
`

const StyledCloseButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 35px;
`

const StyledModal = styled.div`
  background: ${({theme}) => theme.secondary};
  width: 500px;
  max-width: 100%;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
`
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 69;
`

/**
 * Generic modal with close button and dismiss click functionality
 * @param {boolean} show - boolean that determines if the modal is visible
 * @param {funtion} onClose - callback function that will handle closing the modal
 * @param {component} children - content we wish to display inside the modal
 * @param {string} title - title of the modal 
 * @returns 
 */
const Modal = ({ show, onClose, children, title }) => {
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	const handleCloseClick = (e) => {
		e.preventDefault()
		onClose()
	}

	const modalContent = show ? (
		<StyledModalOverlay onClick={handleCloseClick}>
			<StyledModal onClick={(e) => {e.stopPropagation()}}>
				<StyledCloseButton href="#" onClick={handleCloseClick}>X</StyledCloseButton>
				<StyledModalHeader>{title}</StyledModalHeader>
				<StyledModalBody>{children}</StyledModalBody>
			</StyledModal>
		</StyledModalOverlay>
	) : null

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('portal')
		)
	} else {
		return null
	}
}

export default Modal