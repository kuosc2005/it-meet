import { Client, Databases } from 'appwrite'
export const client = new Client();
client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID_2)

export const EVENTS_DATABASE_ID = '694646e80021fc6391f2';
export const COLLECTION_ID = 'event_details'
export const events_database = new Databases(client);

export const fetchData = async () => {
    try {
        const response = await events_database.listDocuments(
            EVENTS_DATABASE_ID,
            COLLECTION_ID
        );
        console.log(response.documents); // array of documents
        return response.documents;
    } catch (error) {
        console.error("Error fetching documents:", error);
    }
}

export { ID } from 'appwrite'