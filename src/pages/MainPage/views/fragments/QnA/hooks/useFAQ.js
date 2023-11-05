import { useState, useContext, useEffect } from 'react'
import { databaseContext } from '../../../../../../context/databaseContext/database.context'

export default function useFAQ() {
    const database = useContext(databaseContext);
    const [qna, setQna] = useState([]);
    useEffect(() => {
        const fetchData = async (type) => {
            return await database.listDocuments("itmeet", "qna");
        };
        fetchData()
            .then((value) => {
                setQna(value.documents);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);
    return { qna }
}
