import { Wrapper, FetchText, StyledText } from "./styled.js";

export const FetchInfo = ({ date }) => {
  return (
    <Wrapper>
      <FetchText>
        Kursy walut pobrane z&nbsp;
        <StyledText as="a" href="https://exchangeratesapi.io/" target="_blank" rel="noopener noreferrer">
          Exchange Rates API
        </StyledText>
      </FetchText>
      <FetchText>
        Aktualne na dzień: <StyledText>{date}</StyledText>
      </FetchText>
    </Wrapper>
  );
};
