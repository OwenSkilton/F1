import React, {useEffect, useState} from 'react';
import {DriverTestObject} from "../../components/TestData/DriverStandingsTestObject";
import {getFunction} from "../Helpers/getFunction";
import URLS from "../../config";
import {Table} from "../Helpers/Table";

const DriverStandings = () => {
    // const [standingsData, setStandingsData] = useState(null)
    const [standingsData, setStandingsData] = useState(DriverTestObject)
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    // useEffect(async () => {
    //     const url = URLS.DRIVER_STANDING_URL
    //     await getFunction(url, setStandingsData, setLoading, setErr)
    // }, [])

    const tHeaders = [
        "Position",
        "Driver",
        "Nationality",
        "Team",
        "Points"
    ]

    const renderDriverTable = () => {
        const tRows = standingsData.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((driver) => {
            return [
                `${driver.position}`,
                `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                `${driver.Driver.nationality}`,
                `${driver.Constructors[0].name}`,
                `${driver.points}`,

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
            { standingsData ? renderDriverTable() : null}
        </div>
    );
};

export default DriverStandings;
