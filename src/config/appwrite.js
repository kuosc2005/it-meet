import { Client, Databases, Storage } from 'appwrite'

export const client = new Client()

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

export const DATABASE_ID = 'ITMeetDatabase'
export const PROJECT_BUCKET_ID = '671605330012c01f3505'
export const SPONSORS_BUCKET_ID = "sponsors";


export const FAQ_COLLECTION_ID = 'FAQ'
export const EXPECT_COLLECTION_ID = 'Expectation'

export const Sponsors_COLLECTION_ID = 'Sponsors'

export const databases = new Databases(client)
export const storage = new Storage(client)

export { ID } from 'appwrite'
