import styled, { keyframes } from 'styled-components';
import { Main } from 'grommet';

const pulse = keyframes`
	0% {
		transform: scale(0.95);
    opacity: 0.9;
	}

	70% {
    transform: scale(1);
    opacity: 0.8;
	}

	100% {
    transform: scale(0.95);
    opacity: 0.9;
	}
`;

export const Container = styled(Main)`
  max-width: 960px;
  margin: 0 auto;
  background: white;
  height: 675px;

  padding: 24px 24px 149px 24px;
`;

export const LogoLoading = styled.img`
  width: 32px;
  height: 32px;
  animation: ${pulse} 0.9s infinite;
`;
