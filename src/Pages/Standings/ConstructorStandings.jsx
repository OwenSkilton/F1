import React, {useEffect, useState} from 'react';
import {Table} from "../Helpers/Table";
import {ConstructorsStandingsTestObject} from "../../components/TestData/ConstructorsStandingsTestObject";
import {getFunction} from "../Helpers/getFunction";
import URLS from "../../config";

const ConstructorStandings = () => {

    // const [standingsData, setStandingsData] = useState(null)
    const [standingsData, setStandingsData] = useState(ConstructorsStandingsTestObject)
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        const url = URLS.CONSTRUCTOR_STANDING_URL
        await getFunction(url, setStandingsData, setLoading, setErr)
    }, [])

    const tHeaders = [
        "Position",
        "Constructor",
        "Points",
        "Wins",
        "Nationality"
    ]

    const renderConstructorsTable = () => {
        const tRows = standingsData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((constructor) => {
            return [
                `${constructor.position}`,
                `${constructor.Constructor.name}`,
                `${constructor.points}`,
                `${constructor.wins}`,
                `${constructor.Constructor.nationality}`
            ]
        })
        return(
            <div className={"margin-3"}>
                {Table(tHeaders, tRows, null)}
            </div>
        )
    }

    return (
        <div className={"margin-1"}>
            { standingsData ? renderConstructorsTable() : null}
        </div>
    );
};

export default ConstructorStandings;
