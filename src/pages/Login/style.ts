import styled from "styled-components";

export const DivFormContainer = styled.div`
  width: 65%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: white;
  text-align: center;
  border-radius: 26px;

  @media (max-width: 900px) {
    width: 95%;
    height: 90%;
  }

  @media (max-width: 1400px) {
    width: 95%;
    height: 85%;
  }
`;

export const FormMain = styled.main`
  width: 50%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: auto;
  padding: 10px;

  h2 {
    margin-left: 12%;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: left;
  }
  @media (max-width: 800px) {
    width: 100%;
    heigth: 100%;
    margin: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    padding-left: 10px;
    width: 80%;
    height: 40px;
    margin-bottom: 15px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  input::placeholder {
    padding-left: 10px;
    font-style: italic;
  }
`;
export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    border-radius: 20px 0px 0px 20px;
  }
`;

export const BtEntry = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--color-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
    white-space: normal;
  }
`;

export const BtRegister = styled.button`
  width: 80%;
  height: 40px;
  margin-bottom: 50px;
  border: none;
  border-radius: 10px;
  background-color: var(--color-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
    white-space: normal;
  }
`;

export const DivHidden = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 800px) {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
