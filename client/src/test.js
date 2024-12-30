import { useEffect, useState } from "react"

export default function Test() {
    const [calendars, setCalendar] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/date", {
            method: "GET"
        })
        .then((response) => response.json())
        .then((result) => setCalendar(result))
        .catch((error) => console.log(error));
    }, [])

    return (
        <div>
            <p className="date_nubmer">{calendars.day}</p>
            <p className="data_month">{calendars.mounth}</p>
            <br></br>

            <h2>TEST</h2>
            
        </div>
    )
}