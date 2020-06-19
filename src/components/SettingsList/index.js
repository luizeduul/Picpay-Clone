import React from 'react';
import { FlatList } from 'react-native';
import {
  SectionTitle,
  SectionContainer,
  SectionList,
  ListItems,
  ItemTitle,
  LabelValue,
} from './styles';


const myAccount = [
  {
    key: String(Math.random()),
    label: 'Meu picpay',
    value: '@luiz.uliana'
  },
  {
    key: String(Math.random()),
    label: 'Meu número',
    value: '(**) *****-****'
  },
  {
    key: String(Math.random()),
    label: 'Meu email',
    value: 'l*******@****.com'
  },
  {
    key: String(Math.random()),
    label: 'Dados pessoais',
    value: 'Nome, CPF e data de nascimento'
  },
  {
    key: String(Math.random()),
    label: 'Meus endereços',
    value: ''
  },
]

const promo = [
  {
    key: String(Math.random()),
    label: 'Conta universitária',
  },
  {
    key: String(Math.random()),
    label: 'Usar código promocional',
  },
  {
    key: String(Math.random()),
    label: 'Convide seus amigos',
  },
]

const configs = [
  {
    key: String(Math.random()),
    label: 'Usar digital para pagar',
  },
  {
    key: String(Math.random()),
    label: 'Alterar senha',
  },
  {
    key: String(Math.random()),
    label: 'Privacidade',
  },
  {
    key: String(Math.random()),
    label: 'Notificações',
  },
  {
    key: String(Math.random()),
    label: 'Contas vinculadas',
  },
]

const geral = [
  {
    key: String(Math.random()),
    label: 'Precisa de ajuda?',
  },
  {
    key: String(Math.random()),
    label: 'Sobre o PicPay',
  },
  {
    key: String(Math.random()),
    label: 'Desativar minha conta',
  },
]

export default function SettingsList() {
  return (
    <SectionContainer>
      <SectionList>
        <SectionTitle>Minha conta</SectionTitle>
        {myAccount.map(item => (
          <ListItems key={item.key}>
            <ItemTitle>{item.label}</ItemTitle>
            <LabelValue>{item.value}</LabelValue>
          </ListItems>
        ))}
      </SectionList>
      <SectionList>
        <SectionTitle>Promoções</SectionTitle>
        {promo.map(item => (
          <ListItems key={item.key}>
            <ItemTitle>{item.label}</ItemTitle>
          </ListItems>
        ))}
      </SectionList>
      <SectionList>
        <SectionTitle>Configurações</SectionTitle>
        {configs.map(item => (
          <ListItems key={item.key}>
            <ItemTitle>{item.label}</ItemTitle>
          </ListItems>
        ))}
      </SectionList>
      <SectionList>
        <SectionTitle>Geral</SectionTitle>
        {geral.map(item => (
          <ListItems key={item.key}>
            <ItemTitle>{item.label}</ItemTitle>
          </ListItems>
        ))}
      </SectionList>
      <SectionList style={{marginTop: 30}}>
        <ListItems>
          <ItemTitle>Sair</ItemTitle>
        </ListItems>
      </SectionList>
    </SectionContainer>
  );
}
