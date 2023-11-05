import react from 'react'
import { databaseContext } from "./database.context";
import { Client, Databases } from 'appwrite';

const DatabaseState = (props) => {
    const client = new Client();
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('64dccafb8c6da12c6e0f');

    const database = new Databases(client)

    return (
        <databaseContext.Provider value={database}>
            {props.children}
        </databaseContext.Provider>
    )
}

export default DatabaseState