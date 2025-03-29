import React from "react";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Start(){

    const navigation = useNavigation();

    function hendleNavToPlayAlone(){
        navigation.navigate("PlayAlone")
    }
    function hendleNavToPlayTogether(){
        navigation.navigate("PlayTogether")
    }
    function hendleNavToRules(){
        navigation.navigate("Rules");
    }

    return (
    <Container>
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
    )
}