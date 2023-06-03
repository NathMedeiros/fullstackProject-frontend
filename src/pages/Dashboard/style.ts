import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  padding: 5px;
  gap: 20px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    
`;

export const DivImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
  background-color: var(--color-color-primary);
  img {
    width: 100px;
  }
`;

export const Main = styled.div`
  width: 25%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  text-align: initial;
  padding: 20px;
  line-height: 1.5;
  border-radius: 26px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
    height: 80%;
    flex-direction: row;
    gap: inherit;
  }
  @media (min-width: 900px) {
  margin-left: 10%;
`;

export const UlUser = styled.ul`
  list-style: none;
`;

export const UlContact = styled.ul`
  width: 100%;
  list-style: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-color-primary);
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-color-secondary);
  }

  @media (max-width: 900px) {
    width: 100%;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: vartransparent;
    }
  }

  li {
    padding: 15px;

    display: flex;
    justify-content: space-between;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: var(--color-grey-100);
    border-radius: 10px;
    margin-bottom: 10px;
    margin-right: 10px;

    @media (max-width: 900px) {
      width: 100%;
    }
    @media (mix-width: 900px) {
      margin-left: 30px;
    }

    button {
      margin-left: 10px;
      border: none;
      background-color: transparent;
    }
  }
`;
export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const DivButtons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const DivContato = styled.div`
  width: 55%;
  height: 100%;
  padding: 30px;
  display: flex;
  text-align: initial;
  line-height: 1.5;
  border-radius: 26px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.4);

  h2 {
    margin-left: 45px;
    text-align: left;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const DivHeaderContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: 49px;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const ButtonPdf = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 80px;
  }
`;

export const BtExit = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: left;
  align-self: flex-start;

  img {
    width: 50px;
  }
`;
export const Bt = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 40px;
  }
`;
export const BtDelete = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 50px;
  }
`;
export const ImgAdd = styled.img`
  width: 40px;
`;
