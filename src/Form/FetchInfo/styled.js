import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.albescentWhite};
  border-radius: 4px;
  width: 320px;
  margin: 15px auto 0;
  padding: 5px;
`;

export const FetchText = styled.p`
  margin: 0;
  padding: 2px;
`;

export const StyledText = styled.span`
  font-weight: 700;
`;