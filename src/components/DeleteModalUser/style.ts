import ReactModal from "react-modal";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled(ReactModal)`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: 343b41#;
  width: 100%;
  height: 50px;
  margin-top: 40px;

  color: var(--color-grey-600);
  align-items: center;
  font-size: 14px;
`;

export const ModalContent = styled.div`
  background-color: white;
  margin-top: 15%;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  // @media (min-width: 416px) {
  //   background-color: white;
  //   margin-top: 15%;
  //   width: 400px;
  //   height: 350x;
  //   border-radius: 4px;
  // }
`;

export const Button = styled.button`
  margin-left: 10px;
  margin-top: 40px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
  background-color: var(--color-color-primary);
`;
