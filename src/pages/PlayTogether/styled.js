import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight() + RFValue(50)}px;
    background-color: ${({theme})=> theme.colors.background};
`

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({theme})=> theme.fonts.bold};;
    text-align: center;
    color: ${({theme})=> theme.colors.white};
`

export const BombMessenge = styled.Text`
    font-size: ${RFValue(18)}px;
    padding-bottom: ${RFValue(10)}px;
    text-align: center;
    color: #FF0044;

`