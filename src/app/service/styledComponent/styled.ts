import styled from "styled-components";

export const FormStyled = styled.form`
  width: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const FormStyledCheck = styled.form`
  width: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100%;
  justify-content: space-between;
`;

export const InputStyled = styled.input`
  padding: 6px 12px 0px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 10px;
  width: 314px;
  box-sizing: border-box;
  position: relative;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ButtonStyled = styled.button`
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 314px;
  &:hover {
    background-color: #0056b3;
  }
`;
export const ButtonStyledOwner = styled.button`
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: #ffffff;
  color: #691071;
  font-size: 16px;
  cursor: pointer;
  width: 314px;
  &:hover {
    background-color: #ffff;
  }
`;
export const ButtonStyledOwnerPurple = styled.button`
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: #691071;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  width: 314px;
`;
export const ButtonStyledOwnerBlue = styled.button`
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  width: 314px;
`;
export const ButtonStyledOwnerSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 12px 0px;
  border-radius: 12px;
  border: none;
  background-color: #ffffff;
  color: #691071;
  font-size: 16px;
  cursor: pointer;
  width: 314px;
  &:hover {
    background-color: #ffff;
  }
`;
export const RelativeBlock = styled.div`
  position: relative;
`;
export const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  position: absolute;
  right: 10px;
  top: 5px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  padding: 3px;
  align-items: center;
  justify-content: center;
  width: 20px;
  font-size: 24px;
  height: 20px;
`;
