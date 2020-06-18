import React from 'react';

import { Container, Option, Title, Img } from './styles';

import universitario from '../../images/08.png';
import img9 from '../../images/09.png';
import maos from '../../images/10.png';
import pagueContas from '../../images/11.png';
import addMoney from '../../images/12.png';
import tenis from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: addMoney,
    title: 'Adicione dinheiro no Picpay',
    bgColor: '#ba2f76',
  },
  {
    key: String(Math.random()),
    img: pagueContas,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b',
  },
  {
    key: String(Math.random()),
    img: universitario,
    title: 'Universitário! Cadastre-se e ganhe mais cashback',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: maos,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: tenis,
    title: 'Compre o que quiser sem sair de casa',
    bgColor: '#4139c8',
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} size={14}/>
        </Option>
      ))}

    </Container>
  );
}
