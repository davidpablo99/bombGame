import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    margin: 0 ${RFValue(45)}px;
`

export const TipTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
`

export const InputContainer = styled.View`
    width: ${RFValue(210)}px;
    height: ${RFValue(30)}px;
    border: ${RFValue(1)}px solid white;
    padding-top:9px;
    margin-top: 5px;
    border-radius: ${RFValue(RFValue(5))}px;
    align-items: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "white",
})`
    width: 90%;
    font-size: ${RFValue(12)}px;

    color: white;
    font-family: ${({ theme }) => theme.fonts.regular};
`