import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.li`
  border-radius: 7px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  transition: background .2s;
  cursor: pointer;

  span{
    margin-left: 8px;
    font-size: 14px;
  }

  svg{
    font-size: 16px;
  }

  &:hover {
    background: ${shade(0.2, '#373737')};
  }
`;