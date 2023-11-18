import { useState, useContext, useEffect } from 'react';
import { databaseContext } from '../../../context/databaseContext/database.context';
import { Query } from 'appwrite';
import { useParams } from 'react-router-dom';

export const useEvent = () => {
  const param = useParams();
  const database = useContext(databaseContext);
  const [event, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      return await database.listDocuments("itmeet", "allevents"
      , [
        Query.equal("$id", [param.id]),
      ]
      );
    };
    fetchData()
      .then((value) => {
        setEvents(value.documents);
        // console.log(value.documents);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return { event }
};
