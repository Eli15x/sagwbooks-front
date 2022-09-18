import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 680px;
  border-radius: 5px;
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  line-height: 24px;
  letter-spacing: -0.25px;
  border-bottom: solid 1px #e6e6e6;
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    border: 0;
    background-color: #ffffff;
  }
`;

export const ModalBody = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
  margin-top: 32px;
  color: #333333;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  margin-left: 30%;
  > button {
    width: 200px;
  }
  > button:first-child {
    margin-right: 20px;
  }
  @media (max-width: 650px) {
    margin-left: 5%;
    width: 100%;
    justify-content: flex-end;
    > div {
      margin-right: 5px;
      > button {
        width: 95px;
      }
    }
  }
`;