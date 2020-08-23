import React from 'react';

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  Home,
  NotificationIcon,
  ProfileCircle,
  CareDownIcon,
} from './styles';

const DeskTopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className='left'>
          <LinkedinIcon />
          <SearchInput placeholder='Pesquisar' />
        </div>
        <div className='right'>
          <nav>
            <button className='active'>
              <Home />
              <span>Inicio</span>
            </button>
            <button>
              <NotificationIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src='https://github.com/codder404.png' />
              <span>
                Eu <CareDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DeskTopHeader;
