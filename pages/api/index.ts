import { connection } from '@/dbUtils'
export default async function handler() {  
    await connection()
}