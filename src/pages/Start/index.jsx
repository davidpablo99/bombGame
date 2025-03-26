import React from "react";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import ButtonComponent from "../../components/Buttons";

export default function Start(){
    const hendleNavToPlayAlone = () =>{
        console.log("Teste de play alone");
    }
    const hendleNavToPlayTogether = () =>{
        console.log("Teste de play Duo");
    }
    const hendleNavToRules = () =>{
        console.log("Teste ver as regras");
    }
    return <Container>
        <Logo source={require("../../assets/logoDark.png")} style={{resizeMode:"contain"}}/>
        <Title>Bem-vindo ao {"\n"} Bomb Game</Title>
        <SubTitle>Escolha um modo de jogo.</SubTitle>
        <ButtonComponent
            buttonText={"Jogar Solo"}
            hendlePress={hendleNavToPlayAlone}
        />
        <ButtonComponent
            buttonText={"Jogar em Dupla"}
            hendlePress={hendleNavToPlayTogether}
        />
        <Rules onPress={hendleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
}