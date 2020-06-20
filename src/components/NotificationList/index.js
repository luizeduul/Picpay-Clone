import React from 'react';
import { FlatList } from 'react-native';
import {
  SectionContainer,
  SectionList,
  ListItems,
  Description,
  LabelDate,
} from './styles';


const notifyList = [
  {
    key: String(Math.random()),
    description:
      'So hoje dia 19, você paga seus amigos e ganha 100% de cashback. Cashback limitado a pagamentos de até R$ 1000,00.',
    date: '19 de Junho de 2020 '
  },
  {
    key: String(Math.random()),
    description:
      'Pague um boleto e ganhe 10% de cashback.',
    date: '18 de Junho de 2020'
  },
  {
    key: String(Math.random()),
    description:
      'Com o Picpay você transfere para seus amigos na hora que quiser, de onde quiser. Toque aqui para saber mais.',
    date: '17 de Junho de 2020'
  },
  {
    key: String(Math.random()),
    description:
      'Faça o cartão picpay e ganhe cashback em todas as suas compras aproveite.',
    date: '08 de Junho de 2020'
  },
  {
    key: String(Math.random()),
    description:
      'Faça o cartão picpay e ganhe cashback em todas as suas compras aproveite.',
    date: '08 de Junho de 2020'
  },
  {
    key: String(Math.random()),
    description:
      'Faça sua doação para instuições de caridade e o vamos vai doar o dobro do valor arrecadado.',
    date: '01 de Junho de 2020'
  },
  {
    key: String(Math.random()),
    description:
      'Você sabia que seu dinheiro rende 100% do CDI quando está na sua conta do Picpay? Adicione dinheiro agora e aproveite.',
    date: '18 de Maio de 2020'
  },
  {
    key: String(Math.random()),
    description:
      'Faça o cartão picpay e ganhe cashback em todas as suas compras aproveite.',
    date: '01 de Maio de 2020'
  },
  {
    key: String(Math.random()),
    description:
      'Com o Picpay você transfere para seus amigos na hora que quiser, de onde quiser. Toque aqui para saber mais.',
    date: '17 de Abril de 2020'
  },
]

export default function NotificationList() {
  return (
    <SectionContainer>
      <SectionList>
        {notifyList.map(item => (
          <ListItems key={item.key}>
            <Description>{item.description}</Description>
            <LabelDate>{item.date}</LabelDate>
          </ListItems>
        ))}
      </SectionList>
    </SectionContainer>
  );
}
