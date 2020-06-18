import React from 'react';
import { Container, Option, Img, Label } from './styles';

import recarga from '../../images/01.png';
import uber from '../../images/02.png';
import transporte from '../../images/03.png';
import sky from '../../images/04.png';
import doacao from '../../images/05.png';
import pagar from '../../images/06.png';
import cobrar from '../../images/07.png';

const items = [
  {
    key: String(Math.random()),
    img: doacao,
    label: 'Central de Doações'
  },
  {
    key: String(Math.random()),
    img: pagar,
    label: 'Pagar Contas'
  },
  {
    key: String(Math.random()),
    img: cobrar,
    label: 'Cobrar'
  },
  {
    key: String(Math.random()),
    img: recarga,
    label: 'Recarga de celular'
  },
  {
    key: String(Math.random()),
    img: sky,
    label: 'Sky Pré Pago'
  },
  {
    key: String(Math.random()),
    img: uber,
    label: 'Uber Pré Pago'
  },
  {
    key: String(Math.random()),
    img: transporte,
    label: 'Cartão de Transporte'
  }
]

export default function Suggestions() {
  return (
    <Container horizontal>
      {items.map(item => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}
