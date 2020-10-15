import styled from 'styled-components';
import { Box } from 'grommet';

export const InputContainer = styled(Box)`
  position: fixed;
  bottom: ${({ show }) => (show ? '0' : '-150px')};
  left: 0;
  right: 0;
  width: 100%;
  height: 150px;
  background-color: #ebecf3;

  display: flex;
  justify-content: center;

  transition: bottom 0.3s cubic-bezier(0.55, 0, 0.1, 1);
`;
