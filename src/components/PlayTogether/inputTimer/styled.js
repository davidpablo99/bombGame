import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme"

export const Timer = styled.View`
    margin-bottom: ${RFValue(20)}px;
    margin-right: ${RFValue(10)}px;
    flex-direction:row;
`;

export const TextTimer = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
    margin: 5px ${RFValue(2)}px;
`;

export const InputContainer = styled.View`
    justify-content: center;
    align-items: center;
`

export const Input = styled.TextInput`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    width: 100%;
`