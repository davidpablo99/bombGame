import React, { useRef } from "react"
import { BombMessenge, Container, Title } from "./styled"
import InputTimer from "../../components/PlayTogether/inputTimer"
import TipInput from "../../components/PlayTogether/tipInput"
import InputPassord from "../../components/PlayTogether/InputPassword"
import ButtonComponent from "../../components/Buttons"
import {useNavigation} from "@react-navigation/native"
import { Alert } from "react-native"

export default function PlayTogether(){
    const navigation = useNavigation();
    function handleStartGame(){
            Alert.alert("Jogo iniciado!")
        }
    function handleNavToStart(){
        navigation.navigate("Start")
    }
    
    return <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer/>
            {/* {<BombMessenge>Mensagem de erro temporaria</BombMessenge>} */}
        <TipInput/>
        <InputPassord/>
        <ButtonComponent buttonText="Iniciar" hendlePress={handleStartGame}/>
        <ButtonComponent buttonText="Página Inicial" hendlePress={handleNavToStart}/>
    </Container>
}