import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className='ad-banner'>
      <span>Garimpo - </span>
      Uma plataforma online de ensino.
    </Container>
  );
};

export default AdBanner;
