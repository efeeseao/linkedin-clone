import React from 'react';

import Skeleton from '../../Skeleton';
import { Container } from './styles';

const LoadingTrandingPanel: React.FC = () => {
  const Row = () => (
    <div className='row'>
      <Skeleton className='square-skeleton white-color' />

      <div className='column'>
        <Skeleton className='row-skeleton white-color' />

        <Skeleton className='row-skeleton white-color' />
      </div>
    </div>
  );
  return (
    <Container>
      <Row />
      <Row />
      <Row />
    </Container>
  );
};

export default LoadingTrandingPanel;
