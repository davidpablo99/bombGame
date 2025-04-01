import React from "react";
import { Container, Logo, SucessImg, Title } from "./styled";

import LogoImg from "../../assets/logoLightRed.png";
import sucessImg from "../../assets/bomba_explodiu.png";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Buttons";

export default function Exploded() {
    const navigation = useNavigation();

    function handleStartGame(){
                navigation.navigate("Start")
            }
    return (
      <Container>
        <Logo source={LogoImg} style={{ resizeMode: "contain" }} />
        <Title>Você Falhou{"\n"}Bomba Explodiu!!!</Title>
        <SucessImg source={sucessImg} style={{resizeMode:"contain"}}/>
        <ButtonComponent buttonText="Página inicial" hendlePress={handleStartGame}/>
      </Container>
    );
  }