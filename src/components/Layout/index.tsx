import React, { useState, useEffect } from 'react';

import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import MobileHeader from '../MobileHeader';
import DeskTopHeader from '../DeskTopHeader';
import AdBanner from '../AdBanner';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Container>
      <MobileHeader />
      <DeskTopHeader />

      <span>{!isLoading && <AdBanner />}</span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;
