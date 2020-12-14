import React, {useState} from "react";
import Lottie from "react-lottie";
import animationFire from "../../assets/lottie/18587-flame-animation.json";
import animationSpinner from "../../assets/lottie/29192-spinner-loader-animation.json";

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
        <Lottie options={defaultOptions}
        height={100}
        width={100}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}/>
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
        <Lottie options={defaultOptions}
        height={100}
        width={100}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}/>
    );
}

