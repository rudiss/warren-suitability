import styled from 'styled-components';
import { Header } from 'grommet';

export const Container = styled(Header)`
  justify-content: center;
  align-items: center;
  background-color: #f5f6fa;
  border-bottom: 1px solid #ebecf3;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  min-height: 64px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;

  img,
  a,
  svg {
    width: 24px;
    height: 24px;
  }

  h1 {
    transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
    display: inline-block;
    padding: 4px 0 0 0;
    margin: 0 auto;
    color: #2e2d33;
    width: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    flex: 1 1 auto;

    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.03125rem;
    font-weight: 700;
  }
`;
