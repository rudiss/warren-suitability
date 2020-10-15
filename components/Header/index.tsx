import React from 'react';
import { Heading } from 'grommet';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <a href='https://warren.com.br/'>
        <img src='left-arrow.svg' alt='back' />
      </a>
      <Heading size='14px' textAlign='center' color='black'>
        PERFIL DE INVESTIDOR
      </Heading>
    </Container>
  );
};

export default React.memo(Header);
