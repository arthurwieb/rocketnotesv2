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
    overflow-y: auto;
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

  .tags {
    display: flex;
    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 10px;
    padding: 16px;

    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  /* max-width: 550px; */
  margin: 38px 115px;

  > header {
    /* display: flex; */
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;
    h1 {
      margin-top: 24px;
    }

    button {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .inputs {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .footer-buttons {
    display: flex;
    gap: 40px;
    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`;
