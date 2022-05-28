import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from "react-bootstrap/Tab";
import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";

const standingsHome = () => {

    const clearState = () => {

    }

    return (
        <div className={"margin-1 centre-container"}>
            <Tabs id={"standings"} className={"tabs-container margin-3 centre-container"} onSelect={() => clearState()}>
                <Tab eventKey={"driver-standings"} title={"Driver Standings"}>
                    <DriverStandings/>
                </Tab>
                <Tab eventKey={"constructor-standings"} title={"Constructor Standings"}>
                    <ConstructorStandings/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default standingsHome;
