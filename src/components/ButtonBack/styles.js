import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;
  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 24px;
  }
`;
