import React from 'react';
import { 
  Img, 
  Header, 
  LabelHelp, 
  ButtonHelp, 
  ProfileContainer, 
  LabelUserName,
  LabelName,
  ButtonShowProfile,
  LabelButtonShowProfile
} from './styles';

import profileLogo from '../../images/broncosProfile.png';
export default function SettingsHeader() {
  return (
    <Header>
      <ButtonHelp>
        <LabelHelp>Ajuda</LabelHelp>
      </ButtonHelp>
      <ProfileContainer>
        <Img source={profileLogo} resizeMode="contain"/>
        <LabelUserName>@luiz.uliana</LabelUserName>
        <LabelName>Luiz Uliana</LabelName>
        <ButtonShowProfile>
          <LabelButtonShowProfile>
            { "Ver meu perfil >"}
          </LabelButtonShowProfile>
        </ButtonShowProfile>
      </ProfileContainer>
    </Header>
  );
}
