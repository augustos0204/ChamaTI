import React from "react"
import {
    ContainerAlertInfo,
    CloseButton,
    ContainerTopTitle,
    ContainerContent,
    AlertText
} from "./style";

export const AlertInfo = () => {
    return (
        <ContainerAlertInfo>
            <ContainerTopTitle>
                <CloseButton/>
            </ContainerTopTitle>
            <ContainerContent>
                <AlertText>
                    Teste
                </AlertText>
            </ContainerContent>
        </ContainerAlertInfo>
    )
}