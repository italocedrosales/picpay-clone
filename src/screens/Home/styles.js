import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  font-size: 20px;
  align-items: center;
  font-weight: bold;
`;