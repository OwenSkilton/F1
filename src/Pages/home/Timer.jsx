import React, {useEffect, useState} from 'react';
import {TimerTestObject} from "../../components/TestData/TimerTestObject";
const axios = require('axios')

export default function Timer() {
    const [nextRaceData, setNextRaceData] = useState(TimerTestObject);
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState(Date.now);

    useEffect(async () => {
        const url = "https://ergast.com/api/f1/current/next.json"
        try {
            const fetchResult = await axios.get(url);
            setNextRaceData(await fetchResult.data)
            setLoading(false)
        } catch (err) {
            setErr(err)
            console.log(JSON.stringify(err))
        }
        const interval = setInterval(() => setTime(Date.now()), 1000)
        return () => {
            clearInterval(interval);
        };
    }, [])

    const constructRaceDate = () => {
        const raceDate =  nextRaceData.MRData.RaceTable.Races[0].date
        const raceTime =  nextRaceData.MRData.RaceTable.Races[0].time.substr(0, nextRaceData.MRData.RaceTable.Races[0].time.length - 1)
        return raceDate + "T" + raceTime
    }

    const calculateNumberOfSecondsTillRace = (numberOfSeconds) => {
        const numberOfDays = Math.floor(numberOfSeconds / (60*60*24))
        numberOfSeconds -= numberOfDays * 60 * 60 * 24
        const numberOfHours = Math.floor(numberOfSeconds / (60*60))
        numberOfSeconds -= numberOfHours * 60 * 60
        const numberOfMinutes = Math.floor(numberOfSeconds / (60))
        numberOfSeconds -= numberOfMinutes * 60
        return {
            "days": numberOfDays,
            "hours": numberOfHours,
            "minutes": numberOfMinutes,
            "seconds": Math.floor(numberOfSeconds),
        }
    }

    const renderClock = () => {
        const raceDateTime = new Date(constructRaceDate());
        const currentDateTimeISO = new Date(new Date().toISOString().slice(0,-1));
        const numberOfSeconds = Math.floor((raceDateTime - currentDateTimeISO) / 1000)
        const timeObject = calculateNumberOfSecondsTillRace(numberOfSeconds)

        return(
            `${timeObject.days} days, ${timeObject.hours} hours, ${timeObject.minutes} minutes, ${timeObject.seconds} seconds`
        )
    }

    return (
        <div className={"container"}>
            <p>Time till next race: { loading ? null : renderClock() }</p>
        </div>
    );

};


