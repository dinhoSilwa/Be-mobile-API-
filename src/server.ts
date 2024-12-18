import { configDotenv } from 'dotenv'
import { MongoDBConnection } from './utils/mongoDB/db.js'
import { uriDB } from './utils/mongoDB/client.js'
import { app } from './app.js'
configDotenv()

export const PORT = process.env.PORT || 5000

const StartServer = async () => {
  try {
    const db = MongoDBConnection.getInstance()
    await db.connect(uriDB as string)
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`)
    })
  } catch (error) {
    console.error('Error starting Server', error)
    process.exit(1)
  }
}
StartServer()
