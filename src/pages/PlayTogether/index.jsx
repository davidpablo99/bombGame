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

    function handleNavToStart(){
        navigation.navigate("Start")
    }

    function handleStartBomb() {
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
            });
    }

    function handleStartGame(){
            BombService.bombActivationTogether({
                question,
                pin,
                hours,
                minutes,
                seconds,
                setMessage,
                setStarted,
                setPin,
                handleStartBomb,
                setAnswer,
            })
        }
    
    function handleDisarmBomb(){
        BombService.bombDisarmTogether({pin, answer, setStarted, intervalId, setPin, setAnswer, navigation})
    }

    function handleGiveUpGame(){
        BombService.givUpGame({intervalId, navigation})
    }
    

    
    return <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer 
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
        />
            {message ? <BombMessenge>{message ? message : null}</BombMessenge> : null}
        <TipInput 
            started={started}
            question={question}
            setQuestion={setQuestion}
        />
        <InputPassord pin={pin} setPin={setPin}/>
        {
            !started ? (
                <>
                <ButtonComponent buttonText="Iniciar" hendlePress={handleStartGame}/>
                <ButtonComponent buttonText="Página Inicial" hendlePress={handleNavToStart}/>
                </>
            ) : (
                <>
                <ButtonComponent buttonText="Desarmar" hendlePress={handleDisarmBomb}/>
                <ButtonComponent buttonText="Desistir" hendlePress={handleGiveUpGame}/>
                </>
            )
        }
    </Container>
}