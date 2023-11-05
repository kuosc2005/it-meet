import { useState, useContext, useEffect } from "react"
import { databaseContext } from '../../../../../../context/databaseContext/database.context'
import { Query } from 'appwrite'

export const useEvents = () => {
    const database = useContext(databaseContext)
    const [event, setEvents] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            return await database.listDocuments("itmeet", "events", [
                Query.equal("type", ["post"])
            ])
        }
        fetchData().then((value) => {
            setEvents(value.documents)
        }).catch(err => {
            alert(err)
        })
    }, [])

    return { event }
}