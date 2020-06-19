import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled(LinearGradient)`
  height: 280px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #FFF;
  font-weight: 200;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  margin-top: 40px;
  flex-direction: row;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 140px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const UseBalance = styled.View`
  background: #1C1C1E;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 10px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8E8E93;
  text-transform: uppercase;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const CodeContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-self: center;
`;

export const CodeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const LabelCode = styled.Text`
  font-size: 14px;
  color: #0DB060;
  margin-left: 10px;
  text-decoration-line: underline;
`;


