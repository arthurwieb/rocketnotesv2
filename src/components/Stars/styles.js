import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  height: 30px;

  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 13px;

  display: flex;
  align-items: center;
  gap: 6px;
`;
