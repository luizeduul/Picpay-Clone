import React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { Container, Header, Wrapper, InputSearch, ContainerInput } from './styles';

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10C86E" />
          <ContainerInput>
            <Ionicons name="ios-search" size={24} color="#B8B9BE" style={{ paddingRight: 10 }} />
            <InputSearch
              placeholder="A quem você quer pagar?"
              placeholderTextColor="#B8B0BE"
            />
          </ContainerInput>
        </Header>
      </Container>
    </Wrapper>
  );
}

