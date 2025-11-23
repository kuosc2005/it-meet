import { Query } from 'appwrite'
import { databases, DATABASE_ID, Sponsors_COLLECTION_ID } from '@/config/appwrite.js'

export const FetchSponsorsData = async () => {
  try {
    const result = await databases.listDocuments(`${DATABASE_ID}`, `${Sponsors_COLLECTION_ID}`, [
      Query.select(['name', 'tier', 'image']),
    ])

    console.log('Documents fetched:', result)

    return result
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
