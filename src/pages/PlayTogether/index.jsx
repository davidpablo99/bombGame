import React, { useRef, useState } from "react"
import { BombMessenge, Container, Title } from "./styled"
import InputTimer from "../../components/PlayTogether/inputTimer"
import TipInput from "../../components/PlayTogether/tipInput"
import InputPassord from "../../components/PlayTogether/InputPassword"
import ButtonComponent from "../../components/Buttons"
import {useNavigation} from "@react-navigation/native"
import BombService from "../../services/bombApp";
import { Alert } from "react-native"

export default function PlayTogether(){
    const navigation = useNavigation();
    const [started, setStarted] = useState(false);
    const [pin, setPin] = useState(["", "", ""]);
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [message, setMessage] = useState("");
    // console.log({pin});
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalId] = useState("")

    function handleStartGame(){
            const diffTime = BombService.getDiffTime({hours, minutes, seconds})
            BombService.startCountdown({
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
    
    return <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer/>
            {message ? <BombMessenge>{message ? message : null}</BombMessenge> : null}
        <TipInput/>
        <InputPassord/>
        <ButtonComponent buttonText="Iniciar" hendlePress={handleStartGame}/>
        <ButtonComponent buttonText="Página Inicial" hendlePress={handleNavToStart}/>
    </Container>
}