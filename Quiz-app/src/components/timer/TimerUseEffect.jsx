import React,{useEffect} from 'react'

const TimerUseEffect = (props) => {
    const {timer, setTimer,showScore, setShowScore} = props;
        
        useEffect(() => {
        let interval;
        if (timer > 0 && !showScore) {
        interval = setInterval(() => {
            setTimer((preTimer) => preTimer - 1);
        }, 1000);
        } else {
        clearInterval(interval);
        setShowScore(true);
        }

        return () => clearInterval(interval);
        }, [timer, showScore]);

}

export default TimerUseEffect