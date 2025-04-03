import moment from "moment"

export default BombService = {
    getDiffTime: ({hours, minutes, seconds})=>{
        const explodeTime = moment();
        let secondsMoment = seconds.length >= 1 ? seconds : 0;
        let minutesMoment = minutes.length >= 1 ? seconds : 0;
        let hoursMoment = hours.length >= 1 ? seconds : 0;

        explodeTime.add(secondsMoment, "seconds").add(minutesMoment, "minutes").add(hoursMoment, "hours")

        const currentTime = moment();
        return explodeTime.unix() - currentTime.unix()
    },
    startCountDown: ({
        setSeconds,
        setMinutes,
        setHours,
        setStarted,
        diffTime,
        setIntervalId,
        intervalId,
        navigation,
    }) => {
        let duration = moment.duration(diffTime * 1000);
        const interval = 1000

        if(diffTime <=0) return;
        const id = setInterval(()=>{
            duration = moment.duration(duration.asMilliseconds() - interval);
            const hoursDigits = duration.hours().toString().padStart(2,"0")
            const minutesDigits = duration.minutes().toString().padStart(2,"0")
            const secondsDigits = duration.seconds().toString().padStart(2,"0")

            const timeEnded = hoursDigits === "00" && minutesDigits === "00" && secondsDigits === "00";

            if(timeEnded){
                clearInterval(intervalId)
                setStarted(false)
                navigation.navigate("exploded");

                setHours(hoursDigits)
                setMinutes(minutesDigits)
                setSeconds(secondsDigits)
            }
        },interval);

        setIntervalId(id)
        return null;
    }
};
