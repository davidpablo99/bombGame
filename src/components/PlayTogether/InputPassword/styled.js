import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: ${RFValue(30)}px ${RFValue(30)}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;


export const InputContainer = styled.View`
  border: ${RFValue(1)}px solid white;
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(30)}px;
  padding: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: ${RFValue(5)}px;
  width: ${RFValue(50)}px;
  background-color: ${(props) =>
    props.abled === false ? "#9999998c" : "transparent"};
`;    