import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 190px;

    padding-right: 10px;
    grid-area: content;
    overflow-y: scroll;

    overflow-y: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      border-radius: 8px;
      border: none;
    }

    ::-webkit-scrollbar-thumb:vertical {
      height: 5px;
    }
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  /* margin: 0 auto; */

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 36px;
    text-align: justify;
  }

  #details {
    margin-top: 24px;
  }

  > #details .note-detail {
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    gap: 19px;
  }

  > #details .user-detail {
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    gap: 8px;
    margin-top: 24px;

    > span {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  }

  #details .user-detail svg {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-right: 8px;
  }

  .note-options {
    display: flex;
    justify-content: space-between;
  }
`;

export const Avatar = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const TagsContainer = styled.section`
  margin: 28px 0;
  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ButtonBack = styled.button`
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
