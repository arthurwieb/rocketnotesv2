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
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
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
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: flex-end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  #details {
    margin-bottom: 40px;
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
