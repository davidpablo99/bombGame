import React from "react";
import { Container, Logo, SucessImg, Title } from "./styled";

import LogoImg from "../../assets/logoDark.png"
import sucessImg from "../../assets/bomba_cortada_matrix.png"
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Buttons";

export default function Disarmed() {
    const navigation = useNavigation();

    function handleStartGame(){
                navigation.navigate("Start")
            }
    return (
      <Container>
        <Logo source={LogoImg} style={{ resizeMode: "contain" }} />
        <Title>Parabéns!!! {"\n"} Você desarmou</Title>
        <SucessImg source={sucessImg} style={{resizeMode:"contain"}}/>
        <ButtonComponent buttonText="Página inicial" hendlePress={handleStartGame}/>
      </Container>
    );
  }