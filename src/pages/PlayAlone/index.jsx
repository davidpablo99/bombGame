import React from "react";
import { Container, Title } from "../Rules/styles";
import bombImage from "../../assets/bomba.png"
import { Alert, ImageBackground } from "react-native";
import { TextTimer, Timer, TipContainer, TipText, TipTitle } from "./styles";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons";
import {useNavigation} from "@react-navigation/native"

export default function PlayAlone(){
    
    const navigation = useNavigation();

    function handleStartGame(){
        Alert.alert("Jogo iniciado!")
    }
    function handleNavToStart(){
        navigation.navigate("Start")
    }
    return (
        <Container>
            <Title>Bomb Game Solo</Title>
            <ImageBackground source={bombImage} resizeMode="cover" 
            style={{
                minHeight:130,
                marginTop:50,
                alignItems:"center",
                justifyContent:"center",
                }}
                >
            <Timer>
                <TextTimer>
                    00 : 00 : 00
                </TextTimer>
            </Timer>
            </ImageBackground>
            <TipContainer>
                <TipTitle>Sua dica:</TipTitle>
                <TipText>Dica vai estar aqui</TipText>
            </TipContainer>
            <PasswordInput/>
            <ButtonComponent buttonText="Iniciar" hendlePress={handleStartGame}/>
            <ButtonComponent buttonText="Página Inicial" hendlePress={handleNavToStart}/>
        </Container>
    )
}