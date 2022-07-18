import dotenv from 'dotenv'

dotenv.config()

const PORT: string | number = process.env.PORT || 3000

const MONGODB_URI: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin&retryWrites=true&w=majority`

export { PORT, MONGODB_URI }
