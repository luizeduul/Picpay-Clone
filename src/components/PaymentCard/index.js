import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {
  Card,
  CardDetails,
  CardInfo,
  CardTitle,
  Img,
  CardBody,
  AddButton,
  AddLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function PaymentCard() {
  return (
    <Card>
      <CardBody>
        <CardDetails>
          <CardTitle>
            Cadastre seu cartão de crédito
          </CardTitle>
          <CardInfo>
            Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu Picpay
          </CardInfo>
        </CardDetails>
        <Img source={creditCard} resizeMode="contain" />
      </CardBody>
      <AddButton>
        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
        <AddLabel>Adicionar cartão de crédito</AddLabel>
      </AddButton>
    </Card>
  );
}
