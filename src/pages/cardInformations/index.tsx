import React from "react"
import { Header } from "../../components/Header"
import CardDescription from "../../components/CardDescription"
import * as S from './styles'

const CardInformations = () => {
    return (
        <S.ContainerCard>
            <Header />
            <CardDescription />
        </S.ContainerCard>

    )
}

export default CardInformations;
