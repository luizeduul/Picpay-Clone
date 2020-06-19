import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Container, Header, Wrapper } from './styles';
import SettingsHeader from '../../components/SettingsHeader';
import SettingsList from '../../components/SettingsList';

export default function Settings() {
  return (
    <Wrapper>
      <Container>
        <SettingsHeader />
        <SettingsList />
      </Container>
    </Wrapper>
  );
}

