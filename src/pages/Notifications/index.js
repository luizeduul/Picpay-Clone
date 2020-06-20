import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Wrapper,
  Title,
  ButtonConfig,
  LabelButton
} from './styles';

import NotificationList from '../../components/NotificationList';

export default function Notifications() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Notificações</Title>
          <ButtonConfig>
            <LabelButton>Configurar</LabelButton>
          </ButtonConfig>
        </Header>
        <NotificationList />
      </Container>
    </Wrapper>
  );
}

