import { useState, useContext, useEffect } from "react"
import { databaseContext } from '../../../../../../context/databaseContext/database.context'
import { Query } from 'appwrite'

export const usePreEvents = () => {
    const database = useContext(databaseContext);
    const [preEvents, setPreEvents] = useState([]);

    useEffect(() => {
        const fetchData = async (type) => {
            return await database.listDocuments("itmeet", "events", [
                Query.equal("type", ["pre"]),
            ]);
        };
        fetchData()
            .then((value) => {
                setPreEvents(value.documents);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return { preEvents }
}