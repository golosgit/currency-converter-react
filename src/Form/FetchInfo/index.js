import { Wrapper, FetchText, StyledText } from "./styled.js";

export const FetchInfo = ({ date }) => {
  return (
    <Wrapper>
      <FetchText>
        Kursy walut pobrane z&nbsp;
        <StyledText as="a" href="https://exchangerate.host/" target="_blank" rel="noopener noreferrer">
        exchangerate.host
        </StyledText>
      </FetchText>
      <FetchText>
        Aktualne na dzień: <StyledText>{date}</StyledText>
      </FetchText>
    </Wrapper>
  );
};
