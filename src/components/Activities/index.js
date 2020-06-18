import React from 'react';
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import {
  Actions,
  Avatar,
  Bold,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Date,
  Description,
  Details,
  Divider,
  Header,
  Options,
  OptionLabel,
  Title,
  Username,
  Value,

} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@renan.modzinski</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <Username>luiz.uliana</Username>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 10,00</Value>
            <Divider />
            <Feather name="lock" color="#FFF" size={14} />
            <Date>Há alguns minutos</Date>
          </Details>
          <Actions>
            <Options>
              <MaterialCommunityIcons name="comment-outline" color="#FFF" size={14} />
              <OptionLabel>0</OptionLabel>
            </Options>
            <Options>
              <AntDesign name="hearto" color="#FFF" size={14} />
              <OptionLabel>0</OptionLabel>
            </Options>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
