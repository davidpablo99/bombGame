import React from "react";
import { Container, Input, InputContainer, TipTitle } from "./styled";

export default function TipInput(){
    return (<Container>
        <TipTitle>Dica de senha:</TipTitle>
        <InputContainer>
            <Input placeholder="Dica para sua dupla"/>
        </InputContainer>
    </Container>)
}