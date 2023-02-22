import styled from 'styled-components/native';
import { Button as ButtonPaper } from 'react-native-paper';

export const Button = styled(ButtonPaper).attrs({
  mode: 'contained',
  contentStyle: { height: 50 },
})`
  justify-content: center;
  margin: 10px 0px;
  border-radius: 12px;
`;

export const Text = styled.Text`
  text-align: center;
  margin: 10px;
  font-size: 15px;
`;
