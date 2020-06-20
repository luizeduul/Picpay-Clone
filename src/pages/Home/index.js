import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Balance, BalanceContainer, BalanceTitle, Container, Header, Wrapper } from './styles';

import Activities from '../../components/Activities';
import Suggestions from '../../components/suggestions';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10C86E" />
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 1000,28</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color="#10C86E" />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}

