import styled, { css } from "styled-components";

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
  width: 110px;
  border-radius: 4px;
  padding: 5px;
  line-height: normal;
  text-align: right;

  ${({ result }) =>
    result &&
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
  background-color: #f5e1cb;
  border-radius: 4px;
`;
