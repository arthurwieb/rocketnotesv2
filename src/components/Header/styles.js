import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: flex-end;

  padding: 0 80px;
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 64px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    /* margin-left: 16px; */
    line-height: 24px;
    align-items: flex-end;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 24px;
  }
`;
