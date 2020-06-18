import React from 'react';

import img13 from '../../images/13.png'
import { Container, Details, Description, Img, Title } from './styles';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>Mantenha suas parcerias, use o Picpay para fazer suas cobranças</Description>
      </Details>
      <Img source={img13}/>
    </Container>
  );
}
