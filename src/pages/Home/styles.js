import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-columns: 250px auto; */
  grid-template-rows: 120px 86px auto;
  grid-template-areas:
    "header"
    "main"
    "content";

  background: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
`;

// isso será removido, brand está no header
export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
//remover
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 64px;
  text-align: center;
  > li {
    margin-bottom: 24px;
  }
`;
// remover
export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;

export const AddMenu = styled.div`
  grid-area: main;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 130px;

  > button {
    margin-top: 0px;
    height: 48px;
    width: 207px;
  }

  > h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  grid-area: content;

  margin-top: 40px;
  padding: 0 130px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 8px;
    border: none;
  }
`;

export const NewNote = styled(Link)`
  /* grid-area: newnote; */
  width: 207px;
  height: 48px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    margin-right: 8px;
  }
`;
