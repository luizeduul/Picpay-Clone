import React, { useState, useEffect } from 'react';
import { Switch } from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Bold,
  BalanceContainer,
  Value,
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Title,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  CodeContainer,
  CodeButton,
  LabelCode,
} from './styles';

import PaymentCard from '../../components/PaymentCard';

export default function Wallet() {

  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToogleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToogleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <Container>
        <Header
          colors={
            useBalance
              ? ['#52E78C', '#1AB563']
              : ['#D3D3D3', '#868686']
          }
        >
          <HeaderContainer>
            <Title>Saldo Picpay</Title>
            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '0,00' : '-----'}</Bold>
              </Value>
              <EyeButton onPress={handleToogleVisibility}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#FFF" />
              </EyeButton>
            </BalanceContainer>
            <Info>Seu saldo está rendendo 100% do CDI</Info>
            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#FFF" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>
              <Action>
                <FontAwesome name="bank" size={20} color="#FFF" />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>
        <UseBalance>
          <UseBalanceTitle>
            Usar saldo ao pagar
        </UseBalanceTitle>
          <Switch
            value={useBalance}
            onValueChange={handleToogleUseBalance}
          />
        </UseBalance>
        <PaymentMethods>
          <PaymentMethodsTitle>
            Formas de pagamento
        </PaymentMethodsTitle>
          <PaymentCard />
        </PaymentMethods>
        <CodeContainer>
          <CodeButton>
            <MaterialCommunityIcons name="ticket-outline" size={18} color="#0DB060" />
            <LabelCode>Usar código promocional</LabelCode>
          </CodeButton>
        </CodeContainer>
      </Container>
    </Wrapper>
  );
}
