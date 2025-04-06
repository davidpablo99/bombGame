import React, { useEffect } from "react";
import { Container, Logo, SucessImg, Title } from "./styled";

import LogoImg from "../../assets/logoLightRed.png";
import sucessImg from "../../assets/bomba_explodiu.png";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Buttons";
import { Vibration } from "react-native";

export default function Exploded() {
    const navigation = useNavigation();

    function handleStartGame(){
                navigation.navigate("Start")
            }
    useEffect(() => {
      Vibration.vibrate(5000);
    }, []);
    

    return (
      <Container>
        <Logo source={LogoImg} style={{ resizeMode: "contain" }} />
        <Title>Você Falhou{"\n"}Bomba Explodiu!!!</Title>
        <SucessImg source={sucessImg} style={{resizeMode:"contain"}}/>
        <ButtonComponent buttonText="Página inicial" hendlePress={handleStartGame}/>
      </Container>
    );
  }