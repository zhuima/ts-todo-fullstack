import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin&retryWrites=true&w=majority`

const DBConnection = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI)
    console.log(`MongoDB Connected ${connection.connection.host}`)
  } catch (error) {
    throw error
  }
}

export default DBConnection
