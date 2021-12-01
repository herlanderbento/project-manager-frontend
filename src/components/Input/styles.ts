import styled, { css } from "styled-components";

interface IContainerProps {
  isFilled: Boolean;
  isFocused: Boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #121212;
  background-color: #121212;
  border-radius: 4px;
  width: 300px;
  height: 42px;
  padding: 10px 15px;
  margin-bottom: 10px;

  svg {
    margin-left: 5px;
    color: #373737;
  }

  ${(props) =>
    props.isFocused &&
    css`
      svg {
        color: #00e676;
      }

      border-color: #00e676;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #00e676;
      }
    `}

  input {
    flex: 1;
    height: 100%;
    padding-left: 15px;
    font-size: 16px;
    background-color: transparent;
    color: #fff;
    border: 0;
  }

  .icon-click {
    cursor: pointer;
  }
`;
