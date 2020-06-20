import React from 'react';
import places from '../../images/places.png';
import {
  Container,
  Img,
  Title,
  Description,
  Button,
  Label
} from './styles';

export default function Places() {
  return (
    <Container>
      <Img source={places}  />
      <Title>Descubra estabelecimentos perto de você</Title>
      <Description>
        Temos estabelecimentos próximos de você que aceitam PicPay,
        para saber quais é só autorizar acesso a sua localização.
      </Description>
      <Button>
        <Label>Autorizar agora</Label>
      </Button>
    </Container>

  );
}
