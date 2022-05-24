export const TimerTestObject = {
    "data": {
        "MRData": {
            "xmlns": "http://ergast.com/mrd/1.5",
            "series": "f1",
            "url": "http://ergast.com/api/f1/current/next.json",
            "limit": "30",
            "offset": "0",
            "total": "1",
            "RaceTable": {
                "season": "2022",
                "round": "6",
                "Races": [
                {
                    "season": "2022",
                    "round": "6",
                    "url": "http://en.wikipedia.org/wiki/2022_Spanish_Grand_Prix",
                    "raceName": "Spanish Grand Prix",
                    "Circuit": {
                        "circuitId": "catalunya",
                        "url": "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
                        "circuitName": "Circuit de Barcelona-Catalunya",
                        "Location": {
                            "lat": "41.57",
                            "long": "2.26111",
                            "locality": "Montmeló",
                            "country": "Spain"
                        }
                    },
                    "date": "2022-05-22",
                    "time": "13:00:00Z",
                    "FirstPractice": {
                        "date": "2022-05-20",
                        "time": "12:00:00Z"
                    },
                    "SecondPractice": {
                        "date": "2022-05-20",
                        "time": "15:00:00Z"
                    },
                    "ThirdPractice": {
                        "date": "2022-05-21",
                        "time": "11:00:00Z"
                    },
                    "Qualifying": {
                        "date": "2022-05-21",
                        "time": "14:00:00Z"
                    }
                }
            ]
        }
    }
},
    "status": 200,
    "statusText": "OK",
    "headers": {
    "cache-control": "public, max-age=300",
        "content-length": "839",
        "content-type": "application/json; charset=utf-8"
},
    "config": {
    "transitional": {
        "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
    },
    "transformRequest": [
        null
    ],
        "transformResponse": [
        null
    ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
        "Accept": "application/json, text/plain, */*"
    },
    "method": "get",
        "url": "https://ergast.com/api/f1/current/next.json"
},
    "request": {}
};