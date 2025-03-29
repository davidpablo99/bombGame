import React, { useRef } from "react"
import { BombMessenge, Container, Title } from "./styled"
import InputTimer from "../../components/PlayTogether/inputTimer"

export default function PlayTogether(){
    

    return <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer/>
        <BombMessenge>Mensagem de erro temporaria</BombMessenge>
    </Container>
}