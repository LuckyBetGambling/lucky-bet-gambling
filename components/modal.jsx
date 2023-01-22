import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModalBody = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: #0F212E;
  color: #B1BAD3;
  width: 500px;
  border-radius: 15px;
  padding: 15px;


`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1100px;
  height: 700px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
`;


export function openModal(callback) {
  const body = document.body
  body.style.position = 'fixed'
  body.style.width = '100%'
  callback()
}

/**
 * Generic modal with close button and dismiss click functionality
 * @param {boolean} show - boolean that determines if the modal is visible
 * @param {funtion} onClose - callback function that will handle closing the modal
 * @param {component} children - content we wish to display inside the modal
 * @param {string} title - title of the modal 
 * @returns 
 */
const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    document.body.style.position = 'initial'
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay onClick={handleCloseClick}>
      <StyledModal onClick={(e) => {e.stopPropagation()}}>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
};

export default Modal;