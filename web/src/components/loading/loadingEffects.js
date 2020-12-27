import React, {useState} from "react";
import Lottie from "react-lottie";
import animationFire from "../../assets/lottie/18587-flame-animation.json";
import animationSpinner from "../../assets/lottie/29192-spinner-loader-animation.json";
import {LoadingContainer} from "./style";

export const LoadingFire = () => {
    const [animationState] = useState({
        isStopped: false,
        isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationFire,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <LoadingContainer style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Lottie options={defaultOptions}
            height={100}
            width={100}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            style={{
                marginBottom: "50px",
            }}/>

            Carregando, aguarde...
        </LoadingContainer>
    );
}

export const SpinnerLoading = () => {
    const [animationState] = useState({
        isStopped: false,
        isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationSpinner,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <LoadingContainer>
            <Lottie options={defaultOptions}
            height={100}
            width={100}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
            style={{
                marginBottom: "50px",
            }}/>

            Carregando, Aguarde...
        </LoadingContainer>
        
    );
}

