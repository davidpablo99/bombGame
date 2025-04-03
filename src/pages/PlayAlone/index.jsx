import React, { useEffect, useState } from "react";
import { Container, Title } from "../Rules/styles";
import bombImage from "../../assets/bomba.png"
import { Alert, ImageBackground } from "react-native";
import { TextTimer, Timer, TipContainer, TipText, TipTitle } from "./styles";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponent from "../../components/Buttons";
import {useNavigation} from "@react-navigation/native"
import BombService from "../../services/bombApp";

export default function PlayAlone(){
    
    const navigation = useNavigation();
    const [started, setStarted] = useState(false);
    const [pin, setPin] = useState(["","",""]);
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("03");
    const [seconds, setSeconds] = useState("00");

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalID] = useState("")

    function handleStartGame(){
        Alert.alert("Jogo iniciado!")
    }

    function handleStartBomb(){
        const diffTime = BombService.getDiffTime({hours,minutes,seconds});
        BombService.startCountDown({
            setSeconds,
            setMinutes,
            setHours,
            setStarted,
            diffTime,
            setIntervalId,
            intervalId,
            navigation,
        })
    }

    function handleNavToStart(){
        navigation.navigate("Start")
    }

    useEffect(() => {
      if(started){
        handleStartBomb()
      }
    }, [started])
    

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
                    {hours} : {minutes} : {seconds}
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