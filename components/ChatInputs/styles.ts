import styled, { css } from 'styled-components';
import { Box, TextInput, Button } from 'grommet';
import CurrencyInput from 'react-currency-masked-input';

const inputStyle = css`
  border: none;
  height: 70px;
  box-shadow: none;
  color: #2e2d33;

  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: 0;
  font-weight: 400;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  margin-top: 0;
  margin-bottom: 0;

  &::placeholder {
    color: inherit;
  }
`;
export const Container = styled(Box)`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #ebecf3;
  padding: 40px 25px;
`;

export const StyledInput = styled(TextInput)`
  ${inputStyle};
  background: inherit;
  outline: none;
`;

export const StyledCurrencyInput = styled(CurrencyInput)`
  ${inputStyle};
  background: inherit;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  outline: none;
`;

export const StyledButton = styled(Button)`
  &:focus {
    border: none;
  }
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
  border-radius: 100px;
  outline: none;
  border: 0;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  min-height: 69px;
  color: ${({ theme }) => theme.global.colors.white};
  background: ${({ theme }) => theme.global.colors.btnBg};

  &.btn-ok {
    min-width: 0;
    width: 100%;
    max-width: 182px;
    padding: 0;
    height: 59px;
    line-height: 59px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: none;
  }
`;
