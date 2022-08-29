import styled, { css } from "styled-components";
import loading from "./loading.gif";

export const Fieldset = styled.fieldset`
  border: 1px solid #bbb;
  border-radius: 4px;
  margin: 20px;
`;

export const Label = styled.label`
  width: 160px;
  display: inline-block;
  padding: 0 5px;
  text-align: right;
`;

export const Input = styled.input`
  border: 1px solid #bbb;
  width: 160px;
  border-radius: 4px;
  padding: 5px;
  line-height: normal;
  text-align: right;

  ${({ resultInput }) =>
    resultInput &&
    css`
      background-color: rgb(231, 225, 225);
    `}
`;

export const Select = styled.select`
  margin: 0 5px;
  border: 1px solid #bbb;
  border-radius: 4px;
  padding: 5px;
`;

export const Legend = styled.legend`
  padding: 5px 10px;
  background-color: #f5e1cb7a;
  border-radius: 4px;
`;

export const LoadingText = styled.p`
  margin: 10px 0;
  text-align: center;
  font-size: 20px;

  ${({ nextLine }) =>
    nextLine &&
    css`
      margin: 10px;
    `}
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingGif = styled.img.attrs({
  src: loading,
  alt: "Loading gif"
})`
  display: block;
  width: 100px;
  margin: 20px auto 10px;
`;