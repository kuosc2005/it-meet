import { useEffect, useState } from "react";
import data from '../data/index.json'

export const useTimer = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const changeTime = () => {
        const eventDate = new Date(data.eventDate);
        const t = eventDate - Date.now();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        setTime({
            days, hours, minutes, seconds
        })
    }
    useEffect(() => {
        changeTime()
    }, [])
    setInterval(changeTime, 1000)
    return { time }
}