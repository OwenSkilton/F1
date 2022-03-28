import React, {useEffect, useState} from 'react';
const axios = require('axios')

export default function Timer() {
    const [nextRaceData, setNextRaceData] = useState(null);
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        setNextRaceData(null)
        const url = "https://ergast.com/api/f1/current/next.json"
        try {
            const fetchResult = await axios.get(url);
            setNextRaceData(await fetchResult.data)
            setLoading(false)
        } catch (err) {
            setErr(err)
            console.log(JSON.stringify(err))
        }
    }, [])

    const log = () => {
        console.log(nextRaceData.MRData.series)
    }
    return (
        // TODO minus the time till the next race from the current time and render every second
        <>
            <button onClick={()=>log()}>Click</button>
            <div className={"timer"}>{loading ? null : nextRaceData.MRData.series}</div>
        </>
    );

};


