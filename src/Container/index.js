import { StyledContainer } from "./styled.js";

export const Container = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};