import React from 'react';
import { Heading } from 'grommet';
import { Container } from './styles';

type HeaderProps = {
  children: React.ReactChild;
  rest: any;
};
const Header: React.FC<HeaderProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <a href='https://warren.com.br/'>
        <img src='left-arrow.svg' alt='back' />
      </a>
      <Heading size='14px' textAlign='center' color='black'>
        PERFIL DE INVESTIDOR
      </Heading>
    </Container>
  );
};

export default Header;
