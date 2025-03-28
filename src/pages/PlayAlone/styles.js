import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
    padding-top:${getStatusBarHeight()} + ${RFValue(50)}px;
    background-color: ${({theme}) => theme.colors.background};
`

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Timer = styled.View`
  margin-bottom: ${RFValue(19)}px;
  margin-right: ${RFValue(12)}px;
`

export const TextTimer = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const TipContainer = styled.View`
  margin: 0 ${RFValue(35)}px;
`

export const TipTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`
export const TipText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${RFValue(5)}px;
`